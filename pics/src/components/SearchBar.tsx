import React, { FormEvent } from 'react';

interface State {
    term?: string
}

interface Props {
    onSubmit: Function
}

class SearchBar extends React.Component<Props, State> {
    
    state:State = {
        term: ''
    }

    onSubmit = (event:FormEvent) => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.term);
    }

    render() {
        const {term} = this.state;

        return (
            <div className="ui segment">
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="image-search">Image search</label>
                        <input type="text" id="image-search" value={term} onChange={(event) => this.setState({term: event.target.value})} />
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;