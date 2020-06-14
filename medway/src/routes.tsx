import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './pages/Dashboard';
import Slider from './pages/Slider';
import PhoneRegister from './pages/PhoneRegister';
import InfoRegister from './pages/InfoRegister';
import InfoComplementaryRegister from './pages/InfoComplementaryRegister';
import InfoDateRegister from './pages/InfoDateRegister';
import Auth from './pages/Auth';

const AppStack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator 
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#F0F0F5'
                    }
                }} 
            >
                <AppStack.Screen name="Slider" component={Slider} />
                <AppStack.Screen name="Dashboard" component={Dashboard} />
                <AppStack.Screen name="PhoneRegister" component={PhoneRegister} />
                <AppStack.Screen name="InfoRegister" component={InfoRegister} />
                <AppStack.Screen name="InfoComplementaryRegister" component={InfoComplementaryRegister} />
                <AppStack.Screen name="InfoDateRegister" component={InfoDateRegister} />
                <AppStack.Screen name="Auth" component={Auth} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;