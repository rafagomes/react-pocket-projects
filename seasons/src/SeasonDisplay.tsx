import React from 'react';

interface Props {
    lat?:number
}

class SeasonDisplay extends React.Component<Props> {
    render() {
        return <div>{this.props.lat}</div>
    }
}

export default SeasonDisplay;