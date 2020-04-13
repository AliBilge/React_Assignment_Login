import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
    state = {
        loggedIn: false
    }
    logIn = () => this.setState({loggedIn: true})
    render() {
        return (
            <div>
                <button onClick=(this.logIn)>Log In</button>
            <div>
                The user is {
                    this.state.loggedIn? "logged in": "not logged in"
            }
            </div>
            </div>
        )
    }
}

ReactDOM.render (
    <Login/>,
    document.getElementById("root")
)