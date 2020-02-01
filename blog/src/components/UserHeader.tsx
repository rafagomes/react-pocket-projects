import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';
import { AppReducer } from '../reducers';

interface Props  {
    fetchUser: Function,
    userId: number,
    user?: any
}

interface OwnProps {
    userId: number
}

class UserHeader extends React.Component<Props> {
    
    componentDidMount() {
        const {userId, fetchUser} = this.props;

        fetchUser(userId);
    }
    
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

export default connect(mapStateToProps, {fetchUser})(UserHeader);