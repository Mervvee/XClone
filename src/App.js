import React , {Component }from "react";
import {Text, View, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import store from "./store";
import { RouterComp } from "./router";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <RouterComp />
      </Provider>
    );
  }
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  
  },
  text:{
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
  }

});

export  default App;