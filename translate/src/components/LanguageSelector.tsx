import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {

    static contextType = LanguageContext;

    render() {
        return (
            <div>
                <p>
                    Select a language: 
                    <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
                    <i className="flag br" onClick={() => this.context.onLanguageChange('brazilian portuguese')} />
                </p>
            </div>
        );
    }
}

export default LanguageSelector;