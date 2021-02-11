import React from "react"
import { Text } from 'react-native';
import Estilo from './estilo'

export default function Numero(props){
    let n1 = props.max 
    let n2 = props.min

    let Numero = Math.floor(Math.random()* (n1 - n2)) + n2
    return <Text style={Estilo.txtG}>O valor aleatorio é :  {Numero}</Text>
}
