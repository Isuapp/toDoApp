
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Provider } from 'react-redux';
import TaskScreen from './src/screens/TaskScreen';
import { createStore } from 'redux';
import { reducer } from './src/store/reducer';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const store = createStore(reducer)
const Stack = createNativeStackNavigator;

const App = props => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Scren name="Home" component={TaskScreen} />
        </Stack.Navigator>
        {/* <TaskScreen /> */}

      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
