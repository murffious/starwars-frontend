import React, { useEffect, useState, Fragment } from "react";
const URL_PEOPLE = "https://swapi.co/api/people"

function getPeople(page) {
  console.log(page)
  return fetch(`${URL_PEOPLE}` ).then(data => data.json());
}

export default function StarWarsPeopleList() {
  const [peopleList, setPeopleList] = useState(null);
  const [count, setCount] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);
  useEffect(() => {
    getPeople()
      .then(results => {
        // console.log(results);
        setPrevious(results.prevoius)
        setNext(results.next)
        setCount(results.count)
       
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
          <tfoot>
         <tr><td>Count:{count} </td></tr> 
            <tr>
              <td><button onClick={() => getPeople(next)}>Next</button></td>
              <td> <button onClick={() => getPeople(previous)}>Previous</button></td>
              </tr>
           <tr><td>{Math.ceil(count/10) }</td></tr>
          </tfoot>
        </table>

          
      ) : (
        "error"
      )}
  
    </div>
  );
}
