// Import React along with the pages.
import React, { Component } from 'react';
import PostPage from './components/PostContainer/PostPage';
import LoginPage from './components/Login/LoginPage';
import Auth from './components/authenication/Auth';
//
class App extends Component {
  constructor(){
    super();
    this.state ={

    }
}

componentDidMount(){
  window.localStorage.setItem('username', '')
}
// etarget name name property form element name = first name on form element input take dyumancitm set equal to key
// input name first name its going  to set to first name watv target

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleLogin = () => {
    window.localStorage.setItem('username', this.state.username);
}

  render() {
    return (
      <div className="App">
        <PostPage />
      </div>
    );
  }
}

export default Auth(App)(LoginPage);