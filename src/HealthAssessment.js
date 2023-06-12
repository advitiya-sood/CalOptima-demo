import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'

const HealthAssessment = () => {

    const [weight, setweight] = useState('')
    const [height, setHeight] = useState('')
    const [bmi,setBmi]= useState('')
    const [description,setDescription] = useState('')
// comment only
    const calculateBmi =() =>{
        const bmi = weight /((height/100)*(height/100))
        setBmi(bmi.toFixed(1))

        if(bmi <18.5){
            setDescription('Underweight, Eat more !!!')
        }
        else if(bmi>=18.5 && bmi<= 24.9){
            setDescription('Normal, keep it up !!!  ')  
        }
        else if(bmi>=25 && bmi<=29.9){
            setDescription('Overweight,start working out...')
        }
        else if(bmi >=30){
            setDescription('Obese, Hit the gym')
        }
    }

  return (
    <View>
        <View style={styles.title}>
        <Text style={styles.titleText}>Assessment</Text>
        </View>
        <TextInput 
        style={styles.input}
        value={weight}
        onChangeText={(text) =>setweight(text)}
        placeholder='Weight in Kg'
        keyboardType='numeric'
        />
        <TextInput 
        style={styles.input}
        value={height}
        onChangeText={(text) =>setHeight(text)}
        placeholder='Height in Cm'
        keyboardType='numeric'
        />
        <TouchableOpacity
            style={styles.button}
            onPress={calculateBmi}>
                <Text style={styles.buttonText}>Calculate</Text>
                
        </TouchableOpacity>

        <View style={styles.resultView}>
            <Text style={styles.result}>Results</Text>
                    <Text style={styles.result}>BMI: {bmi}</Text>
                    <Text style={styles.resDescription}>Suggestion : {description}</Text>
                </View>
      
    </View>
  )
}

export default HealthAssessment

const styles = StyleSheet.create({
    title:{
        backgroundColor: '#2c6975',
        height: 80,
        justifyContent: 'center',
        alignItems:'center',
        marginBottom: 10
    },
    titleText:{
        fontSize: 30,
        color:'#fff',
        fontWeight:'bold'
    },
    input:{
        height: 55,
        margin: 15,
        borderWidth: 1/2,
        padding: 10,
        borderRadius: 5,
        backgroundColor:'#cde0c9'
    },
    button:{
        height: 60,
        margin: 15,
        borderWidth:1/2,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#68b2a0',
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        fontSize:20,
        color: '#fff',
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center'

    },
    resultView:{
        marginTop: 55,
        fontSize: 18,
    },
    result:{
        fontSize: 18,
    },
    resDescription:{
        fontSize:18,
    }

})