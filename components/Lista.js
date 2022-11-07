import { StyleSheet, FlatList, View,} from 'react-native'
import React from 'react'

const Lista = (props) => {
    const {lista, renderItem} = props;

  return (
    <View>
        <FlatList
        data={lista}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
    </View> 
  )
}

export default Lista;