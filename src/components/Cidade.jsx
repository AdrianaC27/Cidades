import React from "react";
import { View, Text, Button} from "react-native";

export default props =>{
    
    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor: '#87CEEB',
            fontSize:40,
        }} >
            <Text > C I T I E S</Text>
            <Text style={{
                height:40,
                margin:20,
                borderBottomWidth:1
                
            }}>TOKIO</Text>
            <Text style={{
                height:40,
                margin:20,
                borderBottomWidth:1 
            }}>PARIS</Text>
            <Button title= "Add Cit"
             onPress={()=>props.navigation.navigate('ListaCidades')}
            />
            
        </View>
    )
    }