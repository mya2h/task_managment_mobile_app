import React, { useState } from 'react'
import {View,StyleSheet,Text,TextInput, TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
const AddItem = ({addItem})=>{
    const [text,setText] = useState('')
    const handleChange = text=>{
        setText(text)
    }
    return(
        <View style={styles.addItem}>
            <TextInput 
               style={styles.input}
               onChangeText={handleChange}
               placeholder="Add New Item"/>
               <TouchableOpacity style={styles.button} onPress={()=>addItem(text)}>
               <MaterialIcons name="add" size={24} color="black"/>
                   <Text>Add Item</Text>
               </TouchableOpacity>
        </View>
    )

}
export default AddItem

const styles = StyleSheet.create({
    input:{
        height:60
    },
    addItem:{
        padding:10
    },
    button:{
        backgroundColor:'lightblue',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:40
    }
})