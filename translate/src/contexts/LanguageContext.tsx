import React from 'react';

interface LanguageContextInterface {
    language: string,
    onLanguageChange?: Function
}

const Context = React.createContext<LanguageContextInterface>({language:'english'});

export class LanguageStore extends React.Component {
    
    state = {language: 'english'}

    onLanguageChange = (language:string) => {
        this.setState({language});
    }

    render() {
        return (
            <Context.Provider value={{...this.state, onLanguageChange: this.onLanguageChange}}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;