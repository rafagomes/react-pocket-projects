import React from 'react';
import {connect} from 'react-redux';
import {Song} from '../actions';

interface State {
    songs: Array<Song>,
    selectedSong?: Song
}

interface Props {
    songs: Array<Song>
}

class SongList extends React.Component<Props> {

    renderList() {
        
        return this.props.songs.map((song:Song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary">Select</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state:State) => {
    return { songs: state.songs};
}

export default connect(mapStateToProps)(SongList);