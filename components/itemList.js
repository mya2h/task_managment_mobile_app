import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,FlatList} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const ItemsList = ({items,deleteItem})=>{
const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemList}>
            <View style={styles.itemListView}>
             <Text style={styles.text}>{item.text}</Text>
             <MaterialIcons name="cancel" size={24} color="red" onPress={()=>deleteItem(item.id)}/>
             </View>
    </TouchableOpacity>
      ); 
 return(
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
 )
}
export default ItemsList

const styles = StyleSheet.create({
    itemList:{
        padding:15,
        backgroundColor:'lightgrey',
        borderBottomWidth:1,
        borderBottomColor:'#f0f0f0',        
    },
    itemListView:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text:{
        fontSize:18
    },
    btn:{
        color:'red'
    }
})