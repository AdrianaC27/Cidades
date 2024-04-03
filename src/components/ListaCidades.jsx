import React from "react";
import { View, Text, Button} from "react-native";

export default props =>{
    
    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor: '#87CEEB',
            
        }} >
            <View>
                <Button title= "Paris"
                onPress={()=>props.navigation.navigate('Paris')}
                />   

            </View>
                    
           <View>
           <Button title= "Tokio"
             onPress={()=>props.navigation.navigate('Tokio')}
            /> 

           </View>
             

            <View>
            <Button title= "Amsterdan"
             onPress={()=>props.navigation.navigate('Amsterdan')}
            />

            </View>
                     
            <View>
            <Button title= "Portland"
             onPress={()=>props.navigation.navigate('Portland')}
            /> 

            </View>
             
            
            <View>
            <Button title= "Mumbai"
             onPress={()=>props.navigation.navigate('Mumbai')}
            /> 

            </View>
            <Text>London</Text>
            <Text>Barcelona</Text>
            <Text>Rio de Janeiro</Text>
            
            
            
        </View>
    )
    }