import React from 'react';
import {connect} from 'react-redux';
import {Stream, getStream} from '../../actions';

interface Props {
    getStream: Function,
    match: any,
    stream: Stream
}

interface State {
    streams: Array<Stream>
}

interface OwnProps extends Props {}

class StreamShow extends React.Component<Props> {

    componentDidMount() {
        this.props.getStream(this.props.match.params.id);
    }

    render() {
        if(!this.props.stream) {
            return <p>Loading...</p>
        }
        
        const {title, description} = this.props.stream;

        return (
            <div>
                <h1>{title}</h1>
                <h4>{description}</h4>
            </div>
        );
    }
}

const mapStateToProps = (state:State, ownProps:OwnProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {getStream})(StreamShow);