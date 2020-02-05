import React from 'react';

interface Props {
    message: string
}

const Spinner = (props:Props) => {

    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    )
};

Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;