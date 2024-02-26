import './Country.css';

const Country = ({country}) => {
    console.log(country)
    const {name, flags, capital} = country;
    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <h4>Capital: {capital}</h4>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;