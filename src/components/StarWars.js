import React, { useEffect, useState, Fragment } from "react";
import { URL_PEOPLE } from "./helpers/constants";
import SearchBar from "./SearchBar";
import Favorite from "./Favorite";

function getPeople() {
  return fetch(`${URL_PEOPLE}`).then(data => data.json());
}
function getPeopleNext(page) {
  return fetch(`${page}`).then(data => data.json());
}

async function loadData(results) {
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
  let [previous, setPrevious] = useState(null);
  let [next, setNext] = useState(1);
  useEffect(() => {
    getPeople()
      .then(async results => {
        setPrevious(results.previous);
        setNext(results.next);
        setCount(results.count);

        return loadData(results);
      })
      .then(peopleList => setPeopleList(peopleList))
      .catch(err => setPeopleList([]));
  }, []);

  const getPage = page => {
    getPeopleNext(page)
      .then(async results => {
        setPrevious(results.previous);
        setNext(results.next);
        setCount(results.count);

        return loadData(results);
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
          <thead>
            <tr>
              <td>
                <SearchBar getPage={getPage} />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Homeworld</th>
              <th>Birthday</th>
            </tr>
            {peopleList.map((person, index) => {
              person.index = index;
              return (
                <Fragment key={person.url}>
                  <tr>
                    <td>{person.name}</td>
                    <td>{person.homeworld}</td>
                    <td>{person.birth_year}</td>
                    <td>
                      <Favorite person={person} />
                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td />
              <td>
                <button
                  name="previous"
                  onClick={() => getPage(previous)}
                  disabled={previous === null ? true : false}
                >
                  Previous
                </button>
              </td>
              <td>
                <button
                  name="next"
                  onClick={() => getPage(next)}
                  disabled={next === null ? true : false}
                >
                  Next
                </button>
              </td>
            </tr>
            <tr>
              <td>Count: {count}</td>
            </tr>
            <tr>
              <td>Page: {Math.ceil(count / 10)}</td>
            </tr>
          </tfoot>
        </table>
      ) : (
        "error"
      )}
    </div>
  );
}
