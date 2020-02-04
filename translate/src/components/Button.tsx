import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

    renderText(language:string) {
        return language === 'english' ? 'Submit' : 'Enviar';
    }

    renderButton(color:string) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({language}) => this.renderText(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(color:string) => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;