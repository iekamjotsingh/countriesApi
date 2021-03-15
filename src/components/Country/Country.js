import React from "react";
import { Link } from "react-router-dom";
import "./Country.css";
function Country(props) {
  return (
    <Link to={`/single-page/${props.name}`} className="linkSingleCountry" params={{ name: `${props.name}` }}>
    <div className="singleCountry">
      <img src={props.flag} alt={props.name}/>
      <div className="textarea">
        <h3>{props.name}</h3>
        <p><strong>Population: </strong>{props.population}</p>
        <p><strong>Region: </strong>{props.region}</p>
        <p><strong>Capital: </strong>{props.capital}</p>
      </div>
    </div>
    </Link>
  );
}

export default Country;
