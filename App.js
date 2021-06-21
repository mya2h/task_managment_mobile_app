import React,{useState} from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import Header from './components/header'
import ItemsList from './components/itemList'
import AddItem from './components/addItem'
export default function App() {
  const[items,setItems] = useState([
    {
      id:"sdkhf12",
      text:"Bread"
    },
    {
      id:"sdkhf13",
      text:"Milk"
    },
    {
      id:"sdkhf14",
      text:"Juice"
    },
    {
      id:"sdkhf15",
      text:"Egg"
    },
  ])
  const deleteItem = (id)=>{
    setItems(prevItems=>{
      return prevItems.filter(item=>item.id!=id)
    })
  }
  const addItem = (text)=>{
    if(!text){
      Alert.alert(
        "Alert Title",
        "Empty text is not allowed",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
    else{
    setItems(prevItems=>{
      return [...prevItems,{id:"1234"+text,text}]
    })
  }
  }
  return (
    <View style={styles.container}>
      <Header/>
      <AddItem addItem={addItem}/>
      <ItemsList items={items} deleteItem={deleteItem}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40

  },
});
