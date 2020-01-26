import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

interface Photos {
    url?: string
}

interface State {
    images: Array<Photos>
}

class App extends React.Component<Photos, State> {
    
    state = {
        images: []
    }

    onSearchSubmit = async (term:string) => {
        const result = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        this.setState({
            images: result.data.results
        })
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}} >
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;