import { StyleSheet, Text, View, Pressable, Modal as NewModal} from 'react-native'
import React from 'react'

const Modal = (props) => {
    const {isVisible, actionDeleteItem, actionEsconderModal} = props;
  return (
      <NewModal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          actionEsconderModal();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modal}>
            <Text style={{fontSize: 20}}>¿Ya completaste esta tarea?</Text>
            <Pressable
              onPress={() => actionDeleteItem()}
              style={styles.modalbotonverde}
            >
              <Text style={styles.modaltexto}>Si</Text>
            </Pressable>
            <Pressable
              onPress={() => actionEsconderModal()}
              style={styles.modalbotonrojo}
            >
              <Text style={styles.modaltexto}>No</Text>
            </Pressable>
          </View>
        </View>
      </NewModal>
  )
}

export default Modal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
    modal:{
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 12,
        padding: 5
    },
    modalbotonrojo:{
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "red",
        marginBottom: 5
    },
    modalbotonverde:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
        borderRadius: 10,
        marginTop:10,
        marginBottom: 5
    },
    modaltexto:{
        color: "white",
        fontSize: 20
    }
})