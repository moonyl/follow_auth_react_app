import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm.jsx';

class SignUpPage extends Component {
    render() {
        return(
            <SignUpForm
            onSubmit = {()=>{}}
            onChange = {()=>{}}
            errors = {{}}
            user = {{}}
            />
        );
    }
}

export default SignUpPage;