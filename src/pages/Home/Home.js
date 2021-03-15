import React from 'react';
import Countries from '../../containers/Countries/Countries';
import Navigation from '../../components/Navigation/Navigation';
import './Home.css'
function Home(props) {
    return (
        <>
            <Navigation />
            <Countries />
        </>
    );
}

export default Home;