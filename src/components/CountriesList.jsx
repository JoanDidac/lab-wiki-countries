import { Link } from 'react-router-dom';

const CountriesList = ({countries}) => {
  
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
        {countries.map((country) => {
          return (
            <div className="country-card" key={country.name.official}>
              <Link
                className="list-group-item list-group-item-action"
                to={`/${country.alpha3Code}`}
              >
                <img style={flagStyle} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="Country's flag" />
                <br></br>
                {country.name.common}
                 </Link>
                </div>
          );
        })}
      </div>
    </div>
  );
};
export default CountriesList;