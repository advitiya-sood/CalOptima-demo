import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;






export const Styles=StyleSheet.create({

    //App
    container: {
        flex: 1,
      },

    


    //Login
    LoginBox:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        width:"100%",
        padding:5,
    },
    HeadingText:{
        fontSize: 38,
         marginBottom: 30,
         fontWeight:"bold"
    },

    //Register
    RegisterBox:{
        flex: 1, 
        width:"100%",
        justifyContent: 'center', 
        alignItems: 'center'
    },

    // Health&Wellness

    healthContainer: {
        flex: 1,
        backgroundColor: '#fff ',
        alignItems: 'center',
        

    },
    headingTitle:{
        fontSize:24,
        color:'purple',
        fontWeight:'bold'

    },
    centerBody: {
        width:windowWidth,
        height: windowHeight/8,
        backgroundColor: '#735CC3',
        marginTop:10,

    RegisterInputStyle:{
        width: '80%', 
        marginBottom: 5 
    },
    InfoBox1:{
        width:"100%",
        flexDirection:"row"

    }
})