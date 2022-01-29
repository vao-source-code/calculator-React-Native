import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import normalize from 'react-native-normalize'
import { styles } from '../theme/appTheme'
import COLORS from '../theme/Colors'


interface Props {
    text: string,
    color: string,
    ancho?: boolean,
    action: (numberText: string) => void;
};



export const ButtonCalc = ({ text, color, ancho = false , action }: Props) => {


    return (

        <TouchableOpacity
        onPress={ () => action(text) }>


            <View style={{
                ...styles.button,
                backgroundColor: color,
                width: (ancho) ? normalize(180) : normalize(80),


            }}>
                <Text
                    style={{
                        ...styles.buttonLabel,
                        color: (color === COLORS.grey) ? 'black' : 'white'
                    }}

                > {text}</Text>
            </View>

        </TouchableOpacity>



    )
}
