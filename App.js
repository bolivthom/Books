import React, { Fragment } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Loading from './src/screens/Loading';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import Main from './src/screens/Main';


const SwitchNavigator = createSwitchNavigator(
  {
    Loading: Loading,
    SignUp: SignUp,
    Login: Login,
    Main: Main
  },
  {
    initialRouteName: 'Loading',
    headerMode: 'none'
  }
)

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Main} />
    </Tab.Navigator>
  );
}


const App = createAppContainer(SwitchNavigator,
  <NavigationContainer>
      <MyTabs />
    </NavigationContainer>);
export default App