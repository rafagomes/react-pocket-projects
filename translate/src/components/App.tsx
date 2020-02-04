import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {

    state = {language: 'english'}

    onLanguageChange = (language:string) => {
        this.setState({language});
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    <p>
                        Select a language: 
                        <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                        <i className="flag br" onClick={() => this.onLanguageChange('brazilian portuguese')} />
                    </p>
                </div>
                <ColorContext.Provider value="primary">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        )
    }
}

export default App;