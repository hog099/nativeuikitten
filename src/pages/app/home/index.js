import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Layout, Text, Spinner } from '@ui-kitten/components';


const Home = () => {

    const [ismounted, setismounted] = useState(false);
    const [localloading, setlocalloading] = useState(true);

    useEffect(()=>{
        if(!ismounted){
            setTimeout(()=>{ setlocalloading(false)}, 1000);
            setismounted(true);
        }
    }, [ismounted]);

    return (
        <Layout style={styles.container} level="3">
            <Layout style={styles.layout} level="3">
                {localloading ?
                    <Spinner status="primary" />
                    :
                    <Text>Home</Text>
                }
            </Layout>
        </Layout>
    );

};

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        width: Dimensions.get('window').width,
    },
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
