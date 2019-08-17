import React, { useEffect, useState, Fragment } from "react";
import Button from "./Button";
const URL_PEOPLE = "https://swapi.co/api/people";

function getPeople(page) {
  return fetch(`${URL_PEOPLE}${page > 1 ? "/?page=" + page : ""}`).then(data =>
    data.json()
  );
}

export default function StarWarsPeopleList(props) {
  const [peopleList, setPeopleList] = useState(null);
  const [count, setCount] = useState(null);
  let [previous, setPrevious] = useState(0);
  let [next, setNext] = useState(1);
  useEffect(() => {
    getPeople()
      .then(async results => {
        console.log(results);
        setPrevious(results.prevoius);
        setNext(results.next);
        setCount(results.count);

        // looks like I need to go get the world from given url code reference
        return await Promise.all(results.results.map(async ({ name, birth_year, homeworld, url }) => {
          homeworld = await fetch(`${homeworld}`).then(data =>
            data.json()).then(data => data.name)
          return { name, birth_year, homeworld, url };
        }));
      })
      .then(peopleList => setPeopleList(peopleList))
      .catch(err => setPeopleList([]));
  }, []);
  console.log(peopleList);
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
              <td>Count:{count} </td>
            </tr>
            <tr>
              <td>
                <button onClick={() => getPeople(previous)}>Previous</button>
              </td>
              <td>
              <button onClick={() => getPeople(next)}>Next</button>
              </td>
            </tr>
            <tr>
              <td>Pages: {Math.ceil(count / 10)}</td>
            </tr>
          </tfoot>
        </table>
      ) : (
        "error"
      )}
    </div>
  );
}
