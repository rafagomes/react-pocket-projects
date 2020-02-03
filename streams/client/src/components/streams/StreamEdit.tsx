import React from 'react';
import {connect} from 'react-redux';
import {Stream, getStream} from '../../actions';

interface State {
    streams: Array<Stream>
}

interface Props {
    match: any,
    getStream: Function
}

interface OwnProps {
    match: any
}

class StreamEdit extends React.Component<Props> {

    componentDidMount() {
        this.props.getStream(this.props.match.params.id);
    }

    render() {
        console.log(this.props);
        return <div>StreamEdit</div>
    };
};

const mapStateToProps = (state:State, ownProps:OwnProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {getStream})(StreamEdit);