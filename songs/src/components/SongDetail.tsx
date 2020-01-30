import React from 'react';
import {connect} from 'react-redux';
import {Song} from '../actions';

interface Props {
    song?: Song
}

interface State {
    selectedSong?: Song
}

const SongDetail = ({song}:Props) => {
    if(!song) {
        return <div>Select a song</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}<br />
                Duration: {song.duration}
            </p>
        </div>
    );
};

const mapStateToProps = (state:State) => {
    return {song : state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);