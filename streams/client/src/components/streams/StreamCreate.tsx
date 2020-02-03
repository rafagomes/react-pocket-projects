import React from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from '../streams/StreamForm';

interface Props {
    createStream:any
}

class StreamCreate extends React.Component<Props> {

    onSubmit = (formValues:any) => {
        this.props.createStream(formValues);
    }
    
    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, {createStream})(StreamCreate);