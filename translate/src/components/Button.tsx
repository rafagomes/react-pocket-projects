import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

    renderText(text:string) {
        return text === 'english' ? 'Submit' : 'Enviar';
    }

    renderButton(color:string) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderText(value)}
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