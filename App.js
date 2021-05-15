import { StatusBar } from "expo-status-bar";
import React from "react";
import { AsyncStorage, Button, StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import Body from "./Body";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: "",
      cargando: true,
    };
  }
  componentDidMount(){
    this.recuperarMemoria();
  }
  establecerTexto = (value) => {
    this.setState({
      texto: value,
    });
  };
  agregarTarea = () => {
    const nuevastareas = [...this.state.tareas, { texto: this.state.texto, key: Date.now() }];
    console.log('agregar tarea antes gm ' + JSON.stringify(nuevastareas));
    this.guardarMemoria(nuevastareas);
    this.setState({
      tareas: nuevastareas,
      texto: '',
    });
    
    console.log('catnidad ' + this.state.tareas.length);
  };
  eliminarTarea = (id) => {
    const nuevastareas = this.state.tareas.filter((tarea) => tarea.key !== id);
    this.guardarMemoria(nuevastareas);
    this.setState({
      tareas: nuevastareas,
    });
  };
  guardarMemoria = (tareas) => {
    AsyncStorage.setItem('@AppEPICUdemy:check-list', JSON.stringify(tareas))
      .then((valor) => {
        console.log('guardar then ' + valor);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  recuperarMemoria = () => {
    AsyncStorage.getItem("@AppEPICUdemy:check-list")
      .then((valor) => {  
        setTimeout(() => {
          this.setState({
            cargando: false,
          });  
        }, 2000);
            
        if (valor !== null) {
          const nuevastareas = JSON.parse(valor);  
          console.log(nuevastareas);
          this.setState({
            tareas: nuevastareas,
          });

        }

      })
      .catch((err) => {
        console.log(err);
        this.setState({
          cargando: false,
        }); 
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header
          texto={this.state.texto}
          establecerTexto={this.establecerTexto}
          agregarTarea={this.agregarTarea}
        />
        <Body 
        tareas={this.state.tareas} 
        eliminarTarea={this.eliminarTarea} 
        cargando={this.state.cargando}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
