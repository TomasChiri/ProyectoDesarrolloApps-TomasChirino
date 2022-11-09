import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import AddItem from "./components/AddItem";
import Lista from "./components/Lista";
import Modal from "./components/Modal";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandleChange = (t) => setTextItem(t);

  const addItem = () => {
    setList((currentState) => [
      ...currentState,
      { id: Math.random().toString(), value: textItem },
    ]);
    setTextItem("");
  };
  const selectedItem = (id) => {
    setItemSelected(list.filter((item) => item.id === id)[0]);
    setModalVisible(true);
  };

  const deleteItem = () => {
    setList((currentState) =>
      currentState.filter((item) => item.id !== itemSelected.id)
    );
    setItemSelected({});
    setModalVisible(false);
  };

  const esconderModal = () => {
    setModalVisible(false);
  }

  const renderItem = ({ item }) => (
    <View style={styles.lista}>
      <Text style={styles.subtitulo}>{item.value}</Text>
      <TouchableOpacity style={styles.buttonlista} onPress={() => selectedItem(item.id)}>
        <Text style={{color:"white"}}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>To Do List</Text>
      <Text style={styles.subtitulo}>Escribe aqui las cosas que tengas que hacer durante el dia.</Text>
      <AddItem textItem={textItem} onHandlerChangeItem={onHandleChange} addItem={addItem}/>
      <Lista lista={list} renderItem={renderItem}/>   
      <Modal isVisible={modalVisible} actionDeleteItem={deleteItem} actionEsconderModal={esconderModal}/>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
  },
  titulo:{
    fontSize: 30,
    marginBottom:15,
    color: "gold",
  },
  subtitulo:{
    fontSize: 15,
    width:"80%",
  },
  lista:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    padding: 5,
  },
  buttonlista:{
    backgroundColor: "rgba(255, 80, 50, 1)",
    height: 25,
    width: 27,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  }
});
