import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom';


class NavBar extends Component {

    handleCreateEventForNontLoggedinUser = () => {
        // Create toastify alert
        this.props.history.push('/signup');
    }

    // renderCreateEventLink = () =>{
    //    if (this.props.isAuthenticated){
    //         return (
    //             <li><NavLink to={`/users/${this.props.currentUser.id}/events/new`}>Create Event
    //          </NavLink></li>
    //         )
    //    } else{
    //         return (
    //             <li><NavLink to={''} onClick={() => this.handleCreateEventForNontLoggedinUser()}>
    //                 Create Event
    //             </NavLink></li>
    //         )
    //    }
    // }

    // renderAccountLink = () => {
    //     if(this.props.isAuthenticated){
    //         return (
    //             <li><NavLink to={`/users/${this.props.currentUser.id}`}>Account</NavLink></li>
    //         )
    //     }
    // }
    // renderLogoutLink = () => {
    //     if(this.props.isAuthenticated){
    //         return (
    //             <li><NavLink to='/logout'>Logout</NavLink></li>
    //         )
    //     }
    // }

    renderSigninSignupLinks = () => {
        if(!this.props.isAuthenticated && !this.props.isAuthenticating){
            return (
                <React.Fragment>
                    <NavLink to={`/users/${this.props.currentUser.id}`}>Account</NavLink>
                    <li><NavLink to='/contacts'>Contacts</NavLink></li>
                    <li><NavLink to='/signin'>Sign In</NavLink></li>
                    <li><NavLink to='/signup'>Sign Up</NavLink></li>
                </React.Fragment>
            )
        } 
    }
    render(){
        return (
            <div className='navBar'>
                <ul className='nav nav-tabs'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <NavLink to={`/users/${this.props.currentUser.id}`}>Account</NavLink>
                    <li><NavLink to='/contacts'>Contacts</NavLink></li>
                    <li><NavLink to='/signin'>Sign In</NavLink></li>
                    <li><NavLink to='/signup'>Sign Up</NavLink></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.authReducer.currentUser,
        isAuthenticated: state.authReducer.isAuthenticated
    }
}
export default withRouter(connect(mapStateToProps)(NavBar));