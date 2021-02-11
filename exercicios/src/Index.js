import React from 'react'
import { View, StyleSheet } from 'react-native'
import Texto from './Components/Primeiro'
import X, {Comp2, Comp3} from './Components/Multi'
import MinMax from './Components/MinMax'
import Aleatorio from './Components/Aleatorio'

export default function Index(){
    return (<View style={style.App}>
        <Aleatorio min={5} max={15}/>

       {/*<MinMax min={1} max={94}/>
        <X />
        <Comp2/>
        <Comp3/>
        <Texto/>*/}
        </View>)
}

const style = StyleSheet.create({
        App: {
            backgroundColor: 'black',
            flexGrow: 1,
            justifyContent: "center",
            alignItems: 'center',
            padding:20,
            
        },
})