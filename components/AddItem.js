import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'

const AddItem = (props) => {
    const {textItem, onHandlerChangeItem, addItem} = props;

  return (
    <View style={styles.inputcontainer}>
        <TextInput
        placeholder="Pasear al perro..."
        placeholderTextColor="grey"
        style={styles.inputStyle}
        value={textItem}
        onChangeText={onHandlerChangeItem}
        />
        <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text>+</Text>
        </TouchableOpacity>
    </View>
  )
}

export default AddItem;

const styles = StyleSheet.create({
    inputcontainer: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 30,
      },
      inputStyle: {
        borderWidth: 1,
        borderRadius: 10,
        width: 250,
        height: 25,
        paddingLeft: 5,
      },
      button: {
        backgroundColor: "lightblue",
        height: 35,
        width: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        borderWidth: 1
      },
})