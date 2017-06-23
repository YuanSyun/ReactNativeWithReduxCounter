// component/pageOne.js

import React, { Component } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class pageOne extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.outerContainer}>
                <Text>Counter Text</Text>

                <Text>{"count = "+ this.props.counter.count}</Text>

                <Button onPress={()=>{this.props.increment();}} title="+1" color="#66B3FF"/>
                <Button onPress={()=>{this.props.decrement();}} title="-1" color="#FF9797"/>
            </View>
        );
    } 
}

const styles = StyleSheet.create({
    outerContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

//export default connect(({routes}) => ({routes})) (pageOne);
export default pageOne;