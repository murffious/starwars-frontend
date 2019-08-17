import React, { useEffect, useState, Fragment } from "react";
import {Previous, Next} from "./Button";
import { URL_PEOPLE } from "./helpers/constants";

function getPeople(url) {
  console.log(url);
  return fetch(`${URL_PEOPLE}`).then(data => data.json());
}

export default function StarWarsPeopleList(props) {
  const [peopleList, setPeopleList] = useState(null);
  const [count, setCount] = useState(null);
  let [previous, setPrevious] = useState(0);
  let [next, setNext] = useState(1);
  useEffect(
    url => {
      console.log("when");
      getPeople(url)
        .then(async results => {
          console.log(results);
          return await Promise.all(
            results.results.map(
              async ({ name, birth_year, homeworld, url }) => {
                homeworld = await fetch(`${homeworld}`)
                  .then(data => data.json())
                  .then(data => data.name);
                return { name, birth_year, homeworld, url };
              }
            )
          );
        })
        .then(peopleList => setPeopleList(peopleList))
        .catch(err => setPeopleList([]));
    },
    [count, next, previous]
  );
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
           
              <td><Previous/></td>
              <td><Next/></td>
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
