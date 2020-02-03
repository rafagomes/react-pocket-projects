import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {listAllStreams, Stream} from '../../actions'

interface Props {
    listAllStreams:Function,
    streams: Array<Stream>,
    googleId: string,
    isSignedIn: Boolean
}

interface State {
    streams: Array<Stream>,
    auth: any
}

class StreamList extends React.Component<Props> {
    
    componentDidMount() {
        this.props.listAllStreams();
    }

    renderAdmin(stream:Stream) {
        if(stream.googleId === this.props.googleId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <span>{stream.title}</span>
                        <span className="description">{stream.description}</span>
                    </div>
                </div>
            );
        });
    }

    renderCreate() {
        if(this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button primary">Create Stream</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        );
    };
};

const mapStateToProps = (state:State) => {
    return {
        streams: Object.values(state.streams),
        googleId: state.auth.googleId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, {listAllStreams})(StreamList);