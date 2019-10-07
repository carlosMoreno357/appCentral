import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import Elemento from './componentes/Elemento';

export default  class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tareas: [],
      texto: '',
    }
  }

  agregarTarea = () => {
    let tareas = this.state.tareas;
    let nuevaTarea = {titulo: this.state.texto, key: new Date().getTime()};
    this.setState({texto: '', tareas: [...this.state.tareas, nuevaTarea]});
  }

  limpiarTareas = () => {
    this.setState({texto: '', tareas: []});
  }

  tareaRandom = async() => {
    await fetch('https://corporatebs-generator.sameerkumar.website/')
    .then((response) => response.json())
    .then((responseJson) => {
        let nuevaTarea = {titulo: responseJson.phrase, key: new Date().getTime()};
        this.setState({texto: '', tareas: [...this.state.tareas, nuevaTarea]});
    });
  }

  render(){
    return (
      <View style={styles.container}>
        {/*HEADER*/}
        <View style={styles.header}>
          <TextInput style={styles.input} value={this.state.texto} onChangeText={(text) => {this.setState({texto: text});}} placeholder="ingresar tarea"></TextInput>
          <Button title='Agregar' onPress={this.agregarTarea}></Button>
        </View>
        <Button title='Tarea Random!' onPress={this.tareaRandom}></Button>
        {/* CONTENIDO */}
        <ScrollView contentContainerStyle={styles.tareas}>
        {
          this.state.tareas.length > 0 ? 
            this.state.tareas.map( (tarea, index) => {
              return <Elemento key={index} titulo={tarea.titulo}></Elemento>
            })
            : <Text style={{marginTop: 200}}> No hay tareas disponibles </Text>
        }
        </ScrollView>

        {/*BOTTOM*/}
        <View style={styles.bottom}>
          <Button title='Limpiar' onPress={this.limpiarTareas}></Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header:{
    backgroundColor: '#191923',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop:50,
    paddingBottom: 25,
    paddingHorizontal:25,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  input:{
    color: '#FDFDFD',
    borderBottomWidth: 1,
    borderBottomColor: '#FEFEFE',
    width: '70%'
  },
  tareas:{
    width: '100%',
    marginHorizontal: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  bottom:{
    position: 'absolute',
    bottom: 10,
    width: '50%'
  }
});
