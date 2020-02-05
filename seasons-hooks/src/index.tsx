import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import userLocation from './userLocation';

const App = () => {

    const [lat, errorMessage] = userLocation();

    let content;

    if(lat && !errorMessage) {
        // TODO: change parseInt to the correct type
        content = <SeasonDisplay lat={parseInt(lat)} />;
    } else if(!lat && errorMessage) {
        content = <p>Error: {errorMessage}</p>;
    } else {
        content = <Spinner message="Please accept the location request" />;
    }

    return <div className="border red">{content}</div>
}

ReactDOM.render(<App />, document.querySelector('#root'));