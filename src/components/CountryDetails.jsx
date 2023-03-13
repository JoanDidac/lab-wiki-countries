import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CountryDetail = ({ countries }) => {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentCountry = countries.find(
      (country) => country.alpha3Code === alpha3Code
    );
    if (currentCountry) {
      setLoading(false);
      setCountry(currentCountry);
    } else {
      setLoading(true);
    }
  }, [alpha3Code]);

  const borderCountries =
    country.borders !== []
      ? countries.filter((country) =>
          country.borders.includes(country.alpha3Code)
        )
      : [];

  const widthStyle = {
    width: '30%',
  };

  return (
    <>
      {loading && (
        <div className="loading">
          <p>Loading country...</p>
        </div>
      )}
      {!loading && country && (
        <div className="col-7">
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt="Country's flag"
          />
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={widthStyle}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.length !== 0 ? (
                      country.borders.map((border) => {
                        return (
                          <li key={border}>
                            <Link to={`/${border}`}>
                              {
                                // format on save
                                countries.find(
                                  (eachCountry) =>
                                    eachCountry.alpha3Code === border
                                ).name.common
                              }
                            </Link>
                          </li>
                        );
                      })
                    ) : (
                      <p>This country has no borders.</p>
                    )}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default CountryDetail;