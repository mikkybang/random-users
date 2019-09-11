import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Card from '../component/card/card';

export default () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Card} />
        </div>
    </BrowserRouter>
);

