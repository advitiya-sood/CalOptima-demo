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

    TopCircle:{
        backgroundColor:"#1A5276",
        height:150,
        width:150,
        borderBottomEndRadius:130

    },

    LoginForm:{
        flex: 1, 
        justifyContent: "flex-start", 
        alignItems: "center", 
        width:"100%",
        marginTop:40,
        padding:5,
    },
    HeadingText:{
        fontSize: 38,
         marginBottom: 30,
         fontWeight:"bold"
    },

    BelowText:{
        fontSize:15, 
        bottom:10,
        fontWeight:"500", 
        padding:10,
        width:"100%",
        marginHorizontal:85,
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
        marginTop:10,},

    RegisterInputStyle:{
        width: '80%', 
        marginBottom: 5 
    },
    InfoBox1:{
        width:"100%",
        flexDirection:"row"

    },
})