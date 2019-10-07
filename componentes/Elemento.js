import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Elemento extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.box}>
                <Text style={styles.texto}>Tarea: {this.props.titulo}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        width: '100%',
        alignSelf: 'center',
        padding: 10,
        marginVertical: 10,
        borderRadius:10,
        backgroundColor: '#F0F0F0'
    },
    texto:{
        color: '#555',
        fontSize: 18,
        alignSelf: 'center'
    }
});
