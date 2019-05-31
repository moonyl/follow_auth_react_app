import React from 'react';
import { Card, CardHeader } from '@material-ui/core';

const HomePage = () => (
  <Card className="container">
    <CardHeader 
        title="React Application" 
        subheader="This is the home page." />
  </Card>
);

export default HomePage;