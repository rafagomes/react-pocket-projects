import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {

    render() {

        return(
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        {(value) => value === 'english' ? 'Name' : 'Nome'}
                    </LanguageContext.Consumer>
                </label>
                <input />
            </div>
        );
    }
}

export default Field;