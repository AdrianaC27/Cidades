import React from "react";
import { SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Cidade from "./components/Cidade";
import ListaCidades from "./components/ListaCidades";
import Paris from "./components/Paris";
import Tokio from "./components/Tokio";
import Amsterdan from "./components/Amsterdan";
import Portland from "./components/Portland";
import Mumbai from "./components/Mumbai";

const Stack = createNativeStackNavigator();

export default props=>{
    return(

        <SafeAreaView style={{flex:1}} >
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Cidade">
                    <Stack.Screen name="Cidade" component={Cidade} 
                        options={{
                            title:'CIDADES'
                    }}/>    
                    <Stack.Screen name="ListaCidades" component={ListaCidades}
                        options={
                            {title:"Lista Cidades"}
                    }/> 
                    <Stack.Screen name="Paris" component={Paris}
                        options={
                            {title:"Paris"}
                    }/> 

                    <Stack.Screen name="Tokio" component={Tokio}
                        options={
                            {title:"Tokio"}
                    }/> 
                    <Stack.Screen name="Amsterdan" component={Amsterdan}
                        options={
                            {title:"Amsterdan"}
                    }/> 
                    <Stack.Screen name="Portland" component={Portland}
                        options={
                            {title:"Portland"}
                    }/> 
                    <Stack.Screen name="Mumbai" component={Mumbai}
                        options={
                            {title:"Mumbai"}
                    }/> 
                    
                </Stack.Navigator>

            </NavigationContainer>

        </SafeAreaView>
    )
}