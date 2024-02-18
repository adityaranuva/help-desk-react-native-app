import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from './context/AuthContext';
import UserScreen from './components/userScreen'; 
import AdminScreen from './components/adminScreen'; 
import LoginScreen from './components/LoginScreen'; 
import TicketDetailScreen from './components/ticketDetailScreen'; 

 const AuthStack = () => {
    const { isSignedIn, role } = useAuth();
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            {isSignedIn ? (
                <>  
                   {role !== 'admin' && <Stack.Screen name="Submit Ticket" component={UserScreen} />}
                   {role === 'admin' &&<Stack.Screen name="Tickets List" component={AdminScreen} />}
                    {role === 'admin' && <Stack.Screen name="TicketDetail" component={TicketDetailScreen} />}
                    
                </>
            ) : (
                <Stack.Screen name="SignIn" component={LoginScreen} options={{ headerShown: false }} />
            )}
        </Stack.Navigator>
    );
};

export default AuthStack;