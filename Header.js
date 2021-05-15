import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        style={styles.texto}
        onChangeText={ (value) => { this.props.establecerTexto(value)}}
        placeholder="Escribe tú tarea"
        onSubmitEditing={this.props.agregarTarea}
        value={this.props.texto}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#00ff00',
      justifyContent: 'center',
    },
    texto:{
        paddingHorizontal: 16,
        fontSize: 24,
    }
  });

export default Header;


