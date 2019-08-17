import React, { useEffect, useState, Fragment } from "react";
import { Previous, Next } from "./Button";
import { URL_PEOPLE } from "./helpers/constants";

function getPeople() {
  return fetch(`${URL_PEOPLE}`).then(data => data.json());
}
function getPeopleNext(page) {
  return fetch(`${page}`).then(data => data.json());
}
async function loadData(results){
  return await Promise.all(
    results.results.map(async ({ name, birth_year, homeworld, url }) => {
      homeworld = await fetch(`${homeworld}`)
        .then(data => data.json())
        .then(data => data.name);
      return { name, birth_year, homeworld, url };
    })
  );
}

export default function StarWarsPeopleList(props) {
  const [peopleList, setPeopleList] = useState(null);
  const [count, setCount] = useState(null);
  let [previous, setPrevious] = useState(0);
  let [next, setNext] = useState(1);
  useEffect((page) => {
    getPeople(page)
      .then(async results => {

        setPrevious(results.previous);
        setNext(results.next);
        setCount(results.count);

        return loadData(results);
      })
      .then(peopleList => setPeopleList(peopleList))
      .catch(err => setPeopleList([]));
  }, []);

  const getPage = (page)=>{
    getPeopleNext(page)
    .then(async results => {

      setPrevious(results.previous);
      setNext(results.next);
      setCount(results.count);

      return loadData(results);
    })
    .then(peopleList => setPeopleList(peopleList))
    .catch(err => setPeopleList([]));
  }

  return (
    <div>
      {peopleList === null ? (
        "...loading"
      ) : peopleList.length > 0 ? (
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Homeworld</th>
              <th>Birthday</th>
            </tr>
            {peopleList.map(person => {
              return (
                <Fragment key={person.url}>
                  <tr>
                    <td>{person.name}</td>
                    <td>{person.homeworld}</td>
                    <td>{person.birth_year}</td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Count:{props.count} </td>
            </tr>
            <tr>
              <td>
                
              </td>
              <td><button name="previous" onClick={() => getPage(previous) }>
                 Previous
                </button></td>
              <td>
                <button name="next" onClick={() => getPage(next) }>
                  Next
                </button>
              </td>
            </tr>
            <tr>
              <td>Pages: {Math.ceil(props.count / 10)}</td>
            </tr>
          </tfoot>
        </table>
      ) : (
        "error"
      )}
    </div>
  );
}
