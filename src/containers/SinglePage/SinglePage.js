import React, { Component } from "react";
import axios from "axios";
import Navigation from "../../components/Navigation/Navigation";
import Spinner from "../../components/Spinner/Spinner";
import "./SinglePage.css";

class SinglePage extends Component {
  state = {
    country: {},
    loading: true,
  };
  componentDidMount() {
    axios
      .get(
        `https://restcountries.eu/rest/v2/name/${this.props.match.params.name}`
      )
      .then((response) => {
        let data = response.data[0];
        console.log(response.data);
        this.setState({ country: data, loading: false });
      })
      .catch((error) => {
        this.props.history.push("/");
      });
  }
  goHome = () => {
    this.props.history.push("/");
  };
  render() {
    let countryInfo = <Spinner />;
    if (!this.state.loading) {
      countryInfo = (
        <div className="country_details" key={this.state.country.name}>
          <h2>{this.state.country.name}</h2>
          <p>
            <strong>Native Name: </strong>
            {this.state.country.nativeName}
          </p>
          <p>
            <strong>Population: </strong>
            {this.state.country.population}
          </p>
          <p>
            <strong>Region: </strong>
            {this.state.country.region}
          </p>
          <p>
            <strong>Sub Region: </strong>
            {this.state.country.subregion}
          </p>
          <p>
            <strong>Capital: </strong>
            {this.state.country.capital}
          </p>
          <p>
            <strong>Top Level Domain: </strong>
            {this.state.country.topLevelDomain}
          </p>
          <p>
            <strong>Borders: </strong>
            {this.state.country.borders + " "}
          </p>
        </div>
      );
    }
    return (
      <div className="singlepage">
        <Navigation />

        <div className="location_details">
          <button onClick={this.goHome} className="buttonForHome">
            Back
          </button>
          <img src={this.state.country.flag} alt={this.state.country.name} />
          {countryInfo}
        </div>
      </div>
    );
  }
}
export default SinglePage;
