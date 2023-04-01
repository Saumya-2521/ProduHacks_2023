import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/native'
import Home from './screens/Home';

export default function App() {
  return (
    <NavigationContainer>
      <createStackNavigator.Navigator>
        <Stack.Screen
        name="Home"
        component={Home}
        options={{title: "Welcome!"}}
        />
      </createStackNavigator.Navigator>
    </NavigationContainer>
  );
}
