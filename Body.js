import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import Tarea from "./Tarea";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Lista de tareas </Text>
        { this.props.cargando && 
        <ActivityIndicator
        size='large'
        color='#640064'
        />}
        
        { !this.props.cargando && <FlatList
        data={this.props.tareas}
        renderItem= { ({item}) => <Tarea item={item} eliminarTarea={this.props.eliminarTarea}/>}
        keyExtractor={ (item, index) => index.toString() }
        />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 9,
      backgroundColor: '#98FB98',
    },
  });

export default Body;
