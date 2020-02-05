import './SeasonDisplay.css';
import React from 'react';

interface Props {
    lat:number
}

interface Season {
    text: string,
    iconName: string
}

interface SeasonConfig {
    [key:string]:Season
}

const seasonConfig:SeasonConfig = {
    winter: {
        text: 'It`s chilly',
        iconName: 'snowflake'
    },
    summer: {
        text: 'Let`s hit the beach',
        iconName: 'sun'
    }
};

class SeasonDisplay extends React.PureComponent<Props> {

    getSeason(month:number, lat:number) {

        if(month > 2 && month < 9) {
            return lat > 0 ? 'summer' : 'winter';
        } else {
            return lat > 0 ? 'winter' : 'summer';
        }
    }

    render() {
        const {lat} = this.props;
        const season = this.getSeason(new Date().getMonth(), lat);
        const {text, iconName} = seasonConfig[season];

        return (
            <div className={`season-display ${season}`}>
                <i className={`${iconName} icon-left massive icon`} /> 
                <h1>{text}</h1>
                <i className={`${iconName} icon-right massive icon`} />
            </div>
        )
    }
}

export default SeasonDisplay;