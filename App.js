
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

const store = createStore(reducer)

const App = props => {

  return (
    <Provider store={store}>
      <TaskScreen />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
