import React, {useState} from 'react';
import {View, Text} from 'react-native';
import { useSelector } from 'react-redux';

import Routes from '../../routes/index';

// import SplashScreen from '../../components/default/splashscreen/index';

const AuthOrApp = () => {

    const [loading, setloading] = useState(true);

    const ableAcess = useSelector(state => state.auth.ableAcess);

    setTimeout(()=>{setloading(false)}, 2000);


    if (loading) {
        // return <SplashScreen />
        return <View><Text>Carregando...</Text></View>
    } else {
        return <Routes ableToAcess={!ableAcess} />;

    }

};

export default AuthOrApp;
