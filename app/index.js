// app/index.js

import React, { Component } from 'react';
import {Text,StyleSheet,} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { bindActionCreators } from 'redux'
import { connect, Provider } from 'react-redux';
import store from './store/configureStore';
import * as actionCreators from './actions/actionCreators';

import Landing from './components/landing';
import PageOne from './components/pageOne';
import PageTwo from './components/pageTwo';
import Home from './components/home';
import Search from './components/search';

const TabIcon = ({ selected, title}) => {
    return (
      <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
    )
}

//Map State To props
//reducers's function name is a object.
function mapStateToProps(state){
  return{
    counter: state.counter,
  };
}

//Map Dispatch To Props
function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}



//connect componentes
const RouterWithRedux = connect(mapStateToProps, mapDispatchToProps)(Router);
const PageOneWithRedux = connect(mapStateToProps, mapDispatchToProps)(PageOne);

export default class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root" hideNavBar>
            <Scene key="landing" component={Landing} title="Landing" initial/>
            <Scene key="pageOne" component={PageOneWithRedux} title="PageOne"/>
            <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}

/*
<Scene
              key="rootTabBar"
              tabs={true}
              tabBarStyle={{backgroundColor: '#ffffff'}}>
              <Scene key="home" component={Home} title="Home" icon={TabIcon} initial />
              <Scene key="search" component={Search} title="Search" icon={TabIcon} />
            </Scene>
*/


const styles = StyleSheet.create({
  tarBarStyle: {
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
  }
})