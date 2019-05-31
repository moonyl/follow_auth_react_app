import React from 'react';
import PropTypes from 'prop-types';
import { 
    Card, 
    InputLabel, 
    Input, 
    FormHelperText, 
    FormControl, 
    Button,
    CardContent
} from '@material-ui/core';
import { Link } from 'react-router-dom'

const SignUpForm = ({
    onSubmit,
    onChange,
    errors,
    user
}) => (
    <Card className="container">
        <form action="/" onSubmit={onSubmit}>
            <h2 className="card-heading">Sign Up</h2>
            {errors.summary && <p className="error-message">
                {errors.summary}
            </p>}
            <div className="field-line">
            <FormControl error={errors.name?true:false} >
                <InputLabel>Name</InputLabel>
                <Input
                    name="name"                    
                    onChange={onChange}
                    value={user.name}
                />
                <FormHelperText>{errors.name}</FormHelperText>
            </FormControl>
            </div>
            <div className="field-line">
            <FormControl error={errors.email?true:false} >
                <InputLabel>Email</InputLabel>
                <Input
                    name="email"                    
                    onChange={onChange}
                    value={user.email}
                />
                <FormHelperText>{errors.email}</FormHelperText>
            </FormControl>
            </div>
            <div className="field-line">
            <FormControl error={errors.password?true:false} >
                <InputLabel>Password</InputLabel>
                <Input
                    name="password"                    
                    onChange={onChange}
                    value={user.password}
                />
                <FormHelperText>{errors.password}</FormHelperText>
            </FormControl>
            </div>
            <div className="button-line">
            <Button type="submit" variant="contained" color="primary">
                Create New Account
            </Button>
            </div>
            <CardContent>
                Already have an account? <Link to={'/login'}>Log in</Link>
            </CardContent>
        </form>
    </Card>
);

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default SignUpForm;
