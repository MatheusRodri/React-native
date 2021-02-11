import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Texto from './Components/Primeiro'
import X, {Comp2, Comp3} from './Components/Multi'
import MinMax from './Components/MinMax'
import Aleatorio from './Components/Aleatorio'

class  Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome:''
        };
        this.pegaNome = this.pegaNome.bind(this);  
    }
    pegaNome(texto){
        if(texto.length > 0){
            this.setState({nome: 'Bem vindo: ' + texto})
        }else{
            this.setState({nome: ''})
        }
       
    }
    render(){
        return (
        <View style={style.App}>
            <TextInput 
            style={style.input}
            placeholder='DIGITE SEU NOME'
            underlineColorAndroid='transparent'
            onChangeText={this.pegaNome}/>
            <Text style={style.texto}>{this.state.nome}</Text>
           <Aleatorio min={5} max={15}/>
           {/*<MinMax min={1} max={94}/>
            <X />
            <Comp2/>
            <Comp3/>
        <Texto/>*/}
            </View>)
    }
    
}

const style = StyleSheet.create({
        App: {
            backgroundColor: 'white',
            flexGrow: 1,
            justifyContent: "center",
            padding:20,
        },
        input:{
            height:45,
            borderWidth:1,
            borderColor:'#222',
            margin: 10,
            fontSize:20,
            padding:10
        },
        texto:{
            textAlign:'center',
            fontSize:25
        }
})

export default Index;