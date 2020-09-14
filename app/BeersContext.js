import React, { Fragment, useState, useEffect } from 'react';

export const BeersContext = React.createContext({
    beers: [],
    setNewUrl: () => {},
    newUrl: null,
});

export const BeersProvider = (props) => {
    Storage.prototype.setObj = function(key, obj) {
        return this.setItem(key, JSON.stringify(obj));
    };

    const setNewUrl = (newUrl) => {
        setstate({ ...state, newUrl });
    };

    let url = 'https://api.punkapi.com/v2/beers';

    const [state, setstate] = useState({
        beers: [],
        setNewUrl,
        newUrl: null,
    });

    useEffect(() => {
        if (state.newUrl !== null) {
            fetch(state.newUrl)
                .then((res) => res.json())
                .then(
                    (result) => {
                        setstate({ beers: result, setNewUrl });
                        localStorage.setObj('BeerList', result);
                    },

                    (error) => {
                        console.log(error);
                    }
                );
        } else if (state.newUrl === null) {
            fetch(url)
                .then((res) => res.json())
                .then(
                    (result) => {
                        setstate({ beers: result, setNewUrl });
                        localStorage.setObj('BeerList', result);
                    },

                    (error) => {
                        console.log(error);
                    }
                );
        }
    }, [state.newUrl]);

    return (
        <BeersContext.Provider value={[state, setstate]}>{props.children} </BeersContext.Provider>
    );
};
