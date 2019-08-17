import React, { useEffect, useState, Fragment } from "react";

function getPage(url) {
  return fetch(url).then(data => data.json());
}

export default function Button() {
  const [peopleList, setPeopleList] = useState(null);
  useEffect(() => {
    getPage()
      .then(results => {
        console.log(results);
        return results.results.map(({ name, birth_year, homeworld, url }) => {
          return { name, birth_year, homeworld, url };
        });
      })
      .then(peopleList => setPeopleList(peopleList))
      .catch(err => setPeopleList([]));
  }, []);
  console.log(peopleList);
  return (
    <button>Next</button>
  )
}