import { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
    console.log(country)
    const {name, flags, capital,} = country;
    const [Visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!Visited)
    }
    
    return (
        <div className={`${Visited ? "country": 'country-active' }`}>
            <h3>Name: {name.common}</h3>
            <h4>Capital: {capital}</h4>
            <img src={flags.png} alt="" />
            <button onClick={handleVisited}>{Visited ? 'Visited' : 'Book'}</button>
            {Visited && 'Cool!'}
        </div>
    );
};

export default Country;