import { combineReducers } from 'redux';
import {SelectSongAction} from '../actions';

const songsReducer = () => {
    return [
        {title: 'No more tears', duration: '4:33'},
        {title: 'No cry', duration: '3:23'},
        {title: 'Came to me again', duration: '1:13'},
        {title: 'Mom love me', duration: '5:00'}
    ];
};

const selectedSongReducer = (selectedSong=null, action: SelectSongAction) => {
    
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});