import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

import styles from "./CountryList.module.css";
import PropTypes from "prop-types";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (cities.length === 0)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = [];

  return (
    <ul className={styles.CountryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

CountryList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CountryList;
