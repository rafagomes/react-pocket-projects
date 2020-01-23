import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

interface State {
    lat?:number,
    errorMessage?: string
}

class App extends React.Component<State> {

    state: State = {
        lat: undefined,
        errorMessage: undefined
    }

    componentDidMount() {
        this.callGeoLocation();
    }

    callGeoLocation() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.geoLocation(position),
            (error) => this.setState({errorMessage: error.message})
        );
    }

    geoLocation(position:any) {
        this.setState({
            lat: position.coords.latitude
        });
    }

    renderContent() {

        if(this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        if(!this.state.lat && this.state.errorMessage) {
            return <p>Error: {this.state.errorMessage}</p>
        }

        return <Spinner message="Please accept the location request" />
    }
    
    render() {
        return <div>{this.renderContent()}</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));