import { StyleSheet } from "react-native";





export const Styles=StyleSheet.create({

    //App

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },


    //Login
    LoginBox:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        width:"95%"
    },
    HeadingText:{
        fontSize: 24,
         marginBottom: 30
    },

    //Register
    RegisterBox:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }

})