import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Provider } from 'react-redux';
import Container from './src/Screens/Practice/Container';
import { Store } from './src/Screens/Practice/Store1';
const App = (props) => {
    return (
    <View style={{flex:1, }}>
      <Provider store={Store}>
        <Container/>
      </Provider>
    </View>
  );
};



export default App;
