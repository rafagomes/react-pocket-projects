import React from 'react';
import {connect} from 'react-redux';
import { AppReducer } from '../reducers';

interface Props  {
    userId: number,
    user?: any
}

interface OwnProps {
    userId: number
}

class UserHeader extends React.Component<Props> {
    
    render() {
        const {user} = this.props;
        
        if(!user) {
            return null;
        }

        return(
            <div className="header">{user.name}</div>
        )
    };
};

const mapStateToProps = (state: AppReducer, ownProps:OwnProps) => {
    return {user: state.users.find(user => user.id === ownProps.userId)};
};

export default connect(mapStateToProps)(UserHeader);