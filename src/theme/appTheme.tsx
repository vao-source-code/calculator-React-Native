
import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
export const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: 'black',
       

    },

    containerCalculadora: {
        
        marginTop:normalize(30),
        paddingHorizontal: normalize(10),
        flex: 1,
        justifyContent: 'flex-end',


    },

    labelResult:{
        color: 'white',
        fontSize: normalize(40),
        textAlign:'right',
        marginBottom:normalize(5),
    },

    labelResultSmall:{
        color: 'rgba(255,255,255,0.4)',
        fontSize: normalize(30),
        textAlign:'right',
    },

    button:{
        height: normalize(80),
        width: normalize(40),
        backgroundColor: '#333333',
        borderRadius: normalize(100),
        justifyContent: 'center',
        marginHorizontal: normalize(10),
        
    },

    buttonLabel:{

        textAlign: 'center',
        padding: normalize(8),
        fontSize: normalize(20),
        color: 'white',
        fontWeight: 'bold',
        
    },

    row:{

        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: normalize(15),
      
        paddingHorizontal: normalize(8),
    },
});