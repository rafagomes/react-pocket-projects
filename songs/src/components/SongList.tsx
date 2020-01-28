import React from 'react';
import {connect} from 'react-redux';
import {Song} from '../actions';

interface State {
    songs: Array<Song>,
    selectedSong?: Song
}

class SongList extends React.Component {
    render() {
        console.log(this.props);
        return <div>SONG</div>
    }
}

const mapStateToProps = (state:State) => {
    return { songs: state.songs};
}

export default connect(mapStateToProps)(SongList);