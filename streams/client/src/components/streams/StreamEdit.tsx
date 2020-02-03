import React from 'react';
import {connect} from 'react-redux';
import {Stream, getStream, updateStream} from '../../actions';
import StreamForm from '../streams/StreamForm';

interface State {
    streams: Array<Stream>
}

interface Props {
    match: any,
    getStream: Function,
    updateStream: Function,
    stream: Stream
}

interface OwnProps {
    match: any
}

class StreamEdit extends React.Component<Props> {

    id = null;

    componentDidMount() {
        this.id = this.props.match.params.id;
        this.props.getStream(this.id);
    }

    onSubmit = (formValues:any) => {
        this.props.updateStream(this.id,formValues);
    }

    render() {
        if(!this.props.stream) {
            return <div>Loading...</div>
        }

        const {title, description} = this.props.stream;

        return (
            <div>
                <h3>Edit {title}</h3>
                <StreamForm initialValues={{title, description}} onSubmit={this.onSubmit} />
            </div>
        );
    };
};

const mapStateToProps = (state:State, ownProps:OwnProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {getStream, updateStream})(StreamEdit);