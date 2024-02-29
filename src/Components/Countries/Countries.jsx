import { useState } from 'react';
import './Countries.css'
import { useEffect } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    console.log(setCountries)

    return (
        <>
            <div>
                <h3>Total countries: {countries.length}</h3>
                <h2>Countries I have visited:</h2>
            </div>
            <div className='countries-container'>
                {
                    countries.map(country => <Country key={country.cca2} country={country} />)
                }
            </div>
        </>
    );
};

export default Countries;