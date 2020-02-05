import {useState, useEffect} from 'react';

interface Error {
    message: string
}

export default () => {
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        callGeoLocation();
    }, []);

    const callGeoLocation = () => {
        window.navigator.geolocation.getCurrentPosition(
            (position:any) => setLat(position.coords.latitude),
            (error:Error) => setErrorMessage(error.message)
        );
    }

    return [lat, errorMessage];
};

