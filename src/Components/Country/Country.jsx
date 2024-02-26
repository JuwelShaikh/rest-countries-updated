import { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
    console.log(country)
    const {name, flags, capital} = country;
    const [Visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(true)
    }
    const [notVisited, setNotVisited] = useState(false);
    const handleNotVisited = () => {
        setNotVisited(true)
    }
    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <h4>Capital: {capital}</h4>
            <img src={flags.png} alt="" />
            <button onClick={handleVisited}>Visited</button>
            {Visited && 'Cool!'}
            <button onClick={handleNotVisited}>Not Visited</button>
            {notVisited && 'Wish you all the best!'}
        </div>
    );
};

export default Country;