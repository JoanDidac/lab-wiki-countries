import { Link } from 'react-router-dom';
import { useState } from 'react';

const CountriesList = ({ countries }) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  const sectionStyle = {
    maxHeight: '90vh',
    overflow: 'scroll',
  };

  const flagStyle = {
    height: '30px',
    width: '43px',
  };

  return (
    <div className="col-5" style={sectionStyle}>
      <h1 className="countries-title">All countries</h1>
      <div className="list-group">
        <input
          type="text"
          placeholder="Search country..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {filteredCountries.map((country) => (
          <div className="country-card" key={country.name.official}>
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              <img
                style={flagStyle}
                src={`https://flagcdn.com/40x30/${country.alpha2Code.toLowerCase()}.png`}
                alt="Country's flag"
              />
              <br />
              {country.name.common}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
