import React, { Fragment, useState, useEffect, useContext } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Routes } from './Routes';
import { BeersProvider, BeersContext } from './BeersContext';

// Global styles
import 'sanitize.css/sanitize.css';
import 'semantic-ui-css/semantic.min.css';

const AppHome = () => {
    return (
        <BrowserRouter>
            <BeersProvider>
                <Fragment>
                    <Switch>
                        <Route component={Routes} />
                    </Switch>
                </Fragment>
            </BeersProvider>
        </BrowserRouter>
    );
};

render(<AppHome />, document.getElementById('app'));
