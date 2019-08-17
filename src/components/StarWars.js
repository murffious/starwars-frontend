import React, { useEffect, useState, Fragment } from "react";

function getPeople() {
  return fetch("https://swapi.co/api/people").then(data => data.json());
}
export default function StarWarsPeopleList() {
  const [peopleList, setPeopleList] = useState(null);
  useEffect(() => {
    getPeople()
      .then(results => {
        // console.log(results);
        // looks like I need to go get the world from given url
        return results.results.map(({ name, birth_year, homeworld, url }) => {
          return { name, birth_year, homeworld, url };
        });
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
        </table>
      ) : (
        "error"
      )}
    </div>
  );
}
