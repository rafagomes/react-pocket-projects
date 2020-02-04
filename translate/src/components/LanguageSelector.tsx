import React from 'react';

interface Props {
    onLanguageChange: Function
}

class LanguageSelector extends React.Component<Props> {

    render() {
        return (
            <div>
                <p>
                    Select a language: 
                    <i className="flag us" onClick={() => this.props.onLanguageChange('english')} />
                    <i className="flag br" onClick={() => this.props.onLanguageChange('brazilian portuguese')} />
                </p>
            </div>
        );
    }
}

export default LanguageSelector;