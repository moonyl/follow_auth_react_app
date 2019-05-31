import React from 'react';
import ReactDom from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header.jsx';
import HomePage from './components/HomePage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';


ReactDom.render((
    <MuiThemeProvider theme={createMuiTheme()}>
        <Router>
            <div>
                <Header />
                <Route exact path="/" component={HomePage} />
                <Route path="/signup" component={SignUpPage} />
            </div>
        </Router>
    </MuiThemeProvider>),
    document.getElementById('react-app'));