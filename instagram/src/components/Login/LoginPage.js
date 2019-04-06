import React from 'react';
import styled from 'styled-components';

// Conected to App.jS

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = () => {
        window.localStorage.setItem('username', this.state.username);
        window.location.reload();
    }
// Connected to App.js
    render(){
        return (
            <LoginPageDiv>
                <LoginRightSide>
                    <InstaFont>Instagram</InstaFont>
                    <StyledH3>Welcome to InstaGram I hope you enjoy your stay</StyledH3>
                    <LogForm onSubmit={this.handleLogin} >
                        <FormInput type="text" 
                        placeholder="UserName" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleChange} 
                    />
                        <FormInput 
                        type="password" 
                        placeholder="PassWord" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                    />
                        <FormButton type="submit">Login</FormButton>
                    </LogForm>
                </LoginRightSide>
            </LoginPageDiv>
        );
    }
}

const LoginPageDiv = styled.div`
    margin: 39px auto;
    max-width: 780px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    max-height: 70vh;
`;


const LoginRightSide = styled.div`
    width: 50%;
    border: 1px solid grey;
`;

const InstaFont = styled.h1`
    font-size: 4rem;
    font-family: 'Sacramento', cursive;
`;

const StyledH3 = styled.h3`
    font-weight: 300;
`;

const LogForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FormInput = styled.input`
    width: 50%;
    font-size: 2rem;
    margin: 15px;
`;

const FormButton = styled.button`
    width: 50%;
    font-size: 2rem;
    margin: 15px;
`;


export default LoginPage;