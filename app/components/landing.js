import React, { Component, PropTypes } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Landing extends Component{
    constructor(props){
        super(props);

        console.log("Landing Page");
        console.log(JSON.stringify(this.props));
        

    }
    static PropTypes={
        routes: PropTypes.object,
    };

    render(){
        const{routes} = this.context;
        console.log(this.context);
        return(
            <View style={styles.outerContainer}>
                <Text>
                    The current scene is titled {this.props.routes.scene.title}.
                </Text>
                <Text onPress={Actions.rooTabBar}>This is Landing Page!</Text>

                <Button onPress={()=>{Actions.pageOne();}} title="Open PageOne" color="#d0d0d0"/>
                <Button onPress={()=>{Actions.pageTwo();}} title="Open PageTwo" color="#B9B9FF"/>
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

export default connect( ({routes})  => ({routes}) ) (Landing);