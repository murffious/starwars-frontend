import React, {Fragment} from "react";
import Favorite from "./Favorite";
// not sure if allowing UNLIKE on this page yet



export default function FavList(props) {
 

  return (
    <div>
      {props.peopleList === null ? (
        "...loading"
      ) : props.peopleList.length > 0 ? (
        <table>
          <thead>
            <tr><td>My Favorites</td></tr>
          </thead>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Homeworld</th>
              <th>Birthday</th>
            </tr>
            {props.peopleList.map((person, index) => {
              person.index = index;
              return (
                <Fragment key={person.url}>
                  <tr>
                    <td>{person.name}</td>
                    <td>{person.homeworld}</td>
                    <td>{person.birth_year}</td>
                    <td><Favorite person={person}/></td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
          <tfoot>
            
            <tr>
              <td>
                
              </td>
              <td><button name="previous" onClick={() => getPage(previous) } disabled={previous===null?true:false}>
                 Previous
                </button></td>
              <td>
                <button name="next" onClick={() => getPage(next) } disabled={next===null?true:false}>
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
