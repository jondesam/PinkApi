import React from 'react';
import { Container } from 'semantic-ui-react';
import { HomePage } from 'views/HomePage';

export const App = () => {
    return (
        <div
            style={{
                backgroundColor: '#E5E5E5',
                minHeight: '100vh',
                paddingTop: '100px',
            }}
        >
            <Container>
                <HomePage />
            </Container>
        </div>
    );
};
