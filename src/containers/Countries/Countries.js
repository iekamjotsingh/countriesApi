import React, { Component } from "react";
import axios from "axios";
import Country from "../../components/Country/Country";
import "./Countries.css";
import Spinner from "../../components/Spinner/Spinner";

class Countries extends Component {
  state = {
    countriesTop: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        let data = response.data;
        this.setState({ countriesTop: data, loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let countrySingle = " ";
    if (this.state.loading) {
      countrySingle = <Spinner />;
    } else {
      countrySingle =     
      this.state.countriesTop.map((country) => {
        return (
          <Country
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        );
      });
    }
    return <div className="countries">{countrySingle}</div>;
  }
}

export default Countries;
