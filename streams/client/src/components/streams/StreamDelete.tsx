import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import Modal from '../Modal';
import history from '../../history';
import {getStream, deleteStream, Stream} from '../../actions/index';

interface Props {
    match: any,
    getStream: (id:number) => void,
    stream: Stream,
    deleteStream: (id:number) => void
}

interface State {
    streams: Array<Stream>
}

interface OwnProps extends Props {}

class StreamDelete extends React.Component<Props> {

    componentDidMount() {
        this.props.getStream(this.props.match.params.id);
    }

    renderActions() {
        const {id} = this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)} className="ui primary button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if(!this.props.stream) {
            return 'Are you sure that you wanna delete this stream?';
        }
        return `Are you sure that you wanna delete the stream with title:"${this.props.stream.title}"?`;
    }

    render() {

        return (
            <div>
                <Modal 
                    title="Delete Stream" 
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        );
    }
}

const mapStateToProps = (state:State, ownProps:OwnProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {getStream, deleteStream})(StreamDelete);