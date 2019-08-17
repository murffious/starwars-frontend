import React, { useEffect, useState, Fragment } from "react";
import { Previous, Next } from "./Button";
import { URL_PEOPLE } from "./helpers/constants";

function getInitialPeople() {
  return fetch(`${URL_PEOPLE}`).then(data => data.json());
}

export default function StarWarsPeopleList(props) {
  const [peopleList, setPeopleList] = useState(null);
  // const [count, setCount] = useState(null);
  let [previous, setPrevious] = useState(0);
  let [next, setNext] = useState(1);
  useEffect(() => {
    console.log("when");
    getInitialPeople()
      .then(async results => {
        return await Promise.all(
          results.results.map(async ({ name, birth_year, homeworld, url }) => {
            homeworld = await fetch(`${homeworld}`)
              .then(data => data.json())
              .then(data => data.name);
            return { name, birth_year, homeworld, url };
          })
        );
      })
      .then(peopleList => setPeopleList(peopleList))
      .catch(err => setPeopleList([]));
  }, []);
  const getNextPage = async (nextUrl) => {
    const data = await fetch(`${nextUrl}`);
    return await data
      .json()
      .then(async results => {
        return await Promise.all(
          results.results.map(async ({ name, birth_year, homeworld, url }) => {
            homeworld = await fetch(`${homeworld}`)
              .then(data => data.json())
              .then(data => data.name);
            return { name, birth_year, homeworld, url };
          })
        );
      })
      .then(peopleList => setPeopleList(peopleList))
      .catch(err => setPeopleList([]));
  };
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
                <Previous setPrevious={setPrevious} previous={props.previous} />
              </td>
              {/* <td><Next setNext={setNext} next={props.next}/></td> */}
              <td>
                <button name="next" onClick={() => getNextPage(props.next) }>
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
