import { useState } from 'react';
import './Countries.css'
import { useEffect } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [wantToVisit, setWantToVisit] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleWantToVisit = (country) => {
        console.log('Want to visit this country');
        const newWantedVisitCountry = [...wantToVisit, country];
        setWantToVisit(newWantedVisitCountry);
    }

    return (
        <>
            <div>
                <h3>Total countries: {countries.length}</h3>
                <div>
                    <h2>Countries I want to visit:{wantToVisit.length}</h2>
                    <ul>
                        {
                            wantToVisit.map(country => <li key={country.cca2}>{country.name.common}</li>)
                        }
                    </ul>
                </div>
            </div>
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        key={country.cca2}
                        country={country}
                        handleWantToVisit={handleWantToVisit}
                    />)
                }
            </div>
        </>
    );
};

export default Countries;