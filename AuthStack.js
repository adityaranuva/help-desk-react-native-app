import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from './context/AuthContext';
import UserScreen from './components/userScreen'; 
import AdminScreen from './components/adminScreen'; 
import LoginScreen from './components/LoginScreen'; 
import TicketDetailScreen from './components/ticketDetailScreen'; 

 const AuthStack = () => {
    const { isSignedIn } = useAuth();
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            {isSignedIn ? (
                <>
                    <Stack.Screen name="Submit ticket" component={UserScreen} />
                    <Stack.Screen name="Tickets list" component={AdminScreen} />
                    <Stack.Screen name="TicketDetail" component={TicketDetailScreen} />
                </>
            ) : (
                <Stack.Screen name="SignIn" component={LoginScreen} options={{ headerShown: false }} />
            )}
        </Stack.Navigator>
    );
};

export default AuthStack;