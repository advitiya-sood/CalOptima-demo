import { StyleSheet } from "react-native";





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
    RegisterInputStyle:{
        width: '80%', 
        marginBottom: 5 
    },
    InfoBox1:{
        width:"100%",
        flexDirection:"row"
    }
})