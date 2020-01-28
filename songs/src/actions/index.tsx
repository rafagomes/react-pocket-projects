export interface Song {
    title: string,
    duration: string
}

export interface SelectSongAction {
    type: string,
    payload: Song
}

export const selectSong = (song:Song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};