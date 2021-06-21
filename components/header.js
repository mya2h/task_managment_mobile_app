import React from 'react'
import {View,Text,StyleSheet} from 'react-native'


const Header = ({title})=>{
    return(
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}
export default Header

Header.defaultProps={
    title:"Shopping List"
}
const styles = StyleSheet.create({
    header:{
        height:60,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:24,
        color:'white'
    }
})