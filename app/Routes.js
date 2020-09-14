import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { App } from 'views/App';
import { BreweryDetail } from '../app/components/BreweryDetail';

export const Routes = () => {
    return (
        <section className="container">
            {' '}
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path={`/beers/:id`} component={BreweryDetail} />
            </Switch>
        </section>
    );
};
