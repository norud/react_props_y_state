import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

class Tarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}> {this.props.item.texto} </Text>
        <TouchableOpacity onPress={() => { this.props.eliminarTarea(this.props.item.key) } }>
        <Ionicons
        name="md-trash"
        size={24}
        color="gray"
        />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 16,
      },
      texto: {
          fontSize:24,
      }
});
export default Tarea;
