import 'react-native-gesture-handler';
import * as React from 'react';
import {Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { BottomNavigation, BottomNavigationTab, Text } from '@ui-kitten/components';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

import Home from '../pages/app/home/index';


const HomeStackNavigator = ({ navigation, route }) => {
    if (route.state) {
        navigation.setOptions({
            tabBarVisible: route.state.index > 0 ? false : true
        });
    }
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={props => <Home />} />
        </HomeStack.Navigator>
    );
};


// const HomeIcon = (props) => (<Icon {...props} name='home' />);
// const EmAltaIcon = (props) => (<Icon {...props} name='trending-up-outline' />);
// const Menu03Icon = (props) => (<Icon {...props} name='sun-outline' />);
// const AccountIcon = (props) => (<Icon {...props} name='person' />);

// const BottomTabBar = ({ navigation, state }) => {
//     return (
//         <BottomNavigation
//             selectedIndex={state.index}
//             onSelect={index => navigation.navigate(state.routeNames[index])}>
//             <BottomNavigationTab title='Home' icon={HomeIcon} />
//             <BottomNavigationTab title='Em Alta' icon={EmAltaIcon} />
//             <BottomNavigationTab title='Menu03' icon={Menu03Icon} />
//             <BottomNavigationTab title='Minha Conta' icon={AccountIcon} />
//         </BottomNavigation>
//     );
// }


const App = ({ ableToAcess = false }) => {

    return (
        <NavigationContainer>
            {!ableToAcess ?
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Welcome" component={props => <Text>BemVindo</Text>} />
                    <Stack.Screen name="Auth" component={props => <Text>Login</Text>} />
                </Stack.Navigator>
                :
                // <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
                //     <Tab.Screen name='Home' component={HomeStackNavigator} />
                //     <Tab.Screen name='Em Alta' component={props => <DefaultLayout><Text>Em Alta</Text></DefaultLayout>} />
                //     <Tab.Screen name='Menu03' component={props => <DefaultLayout><Text>menu03</Text></DefaultLayout>} />
                //     <Tab.Screen name='Conta' component={SwitchProfileNavigator} />
                // </Tab.Navigator>                

                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused }) => {
                            let iconColor;
                            iconColor = focused ? '#545A9F' : '#B3B8EF';

                            let iconName;
                            if (route.name === 'Home') {
                                iconName = 'home';
                            } else if (route.name === 'Menu03') {
                                iconName = 'tags';
                            } else if (route.name === 'Em Alta') {
                                iconName = 'fire';
                            } else if (route.name === 'Account') {
                                iconName = 'user-circle';
                            }
                            return <Icon color={iconColor} size={16} name={iconName} />;
                        },
                    })
                    }
                    tabBarOptions={{
                        activeTintColor: '#545A9F',
                        inactiveTintColor: '#B3B8EF',
                        // activeBackgroundColor: '#545A9F',
                        activeBackgroundColor: '#ffffff',
                        labelStyle: {
                            fontSize: 10,
                            fontWeight: 'bold',
                        },
                        style: {
                            minHeight: 30,
                            backgroundColor: '#ffffff'
                        },
                    }}
                >
                    <Tab.Screen name='Home' component={HomeStackNavigator} />
                    <Tab.Screen name='Account' component={props => <Text>Conta</Text>} />
                </Tab.Navigator>

            }
        </NavigationContainer >
    );
}

export default App;
