import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

declare global {
    interface Window {
        gapi: any
    }
}

interface Props {
    signIn: (googleID:string) => {},
    signOut: () => {},
    isSignedIn: Boolean
}

interface State {
    auth:any
}

class GoogleAuth extends React.Component<Props> {
    auth:any = {};

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '370800528761-apf2t5ouvq75kjqpruon3n3qnbdasd6m.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    };

    onAuthChange = (isSignedIn:Boolean) => {
        const googleID = this.auth.currentUser.get().getId();

        if(isSignedIn) {
            this.props.signIn(googleID);
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state:State) => {
    return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);