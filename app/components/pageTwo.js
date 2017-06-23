// component/pageTwo.js

import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const pageTwo = ()=>{
    return(
        <View style={styles.outerContainer}>
            <Text>我是Page Two</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default connect(({routes}) => ({routes})) (pageTwo);