import React from 'react';
import './Country.css'

const Country = (props) => {

    const { name, capital, flag } = props.country;
    return (
        <div className="country">
            <h2>Country Name : {name}</h2>
            <p>Capital : {capital}</p>
            <img src={flag} alt="" />
        </div>
    );
};

export default Country;