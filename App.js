import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './context/AuthContext';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

const App = () => {
    return (
        <AuthProvider>
            <NavigationContainer>
                <AuthStack />
            </NavigationContainer>
        </AuthProvider>
    );
};

export default App;
