import React from 'react';
import Modal from '../Modal';

class StreamDelete extends React.Component {

    render() {
        const actions = (
            <React.Fragment>
                <button className="ui primary button negative">Delete</button>
                <button className="ui button">Cancel</button>
            </React.Fragment>
        );

        return (
            <div>
                StreamDelete
                <Modal 
                    title="Delete Stream" 
                    content="Are you sure that you wanna delete this stream?"
                    actions={actions}    
                />
            </div>
        );
    };
};

export default StreamDelete;