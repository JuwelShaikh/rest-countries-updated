import { useState } from 'react';
import './Country.css';

const Country = ({country , handleWantToVisit, handleFlags}) => {
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
            <button onClick={() => handleWantToVisit(country)}>Want to visit</button>
            <button onClick={()=> handleFlags(country)}>Liked Flags</button>
            <button onClick={handleVisited}>{Visited ? 'Visited' : 'Book'}</button>
            {Visited && 'Cool!'}
        </div>
    );
};

export default Country;