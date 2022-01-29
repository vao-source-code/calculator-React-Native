import React, { useRef, useState } from "react";
import { View, Text } from "react-native";
import { ButtonCalc } from "../components/ButtonCalc";
import { useCalculator } from "../hooks/useCalculator";
import { styles } from "../theme/appTheme";
import { COLORS } from "../theme/Colors";





export const CalculadoraScreen = () => {

    const { anterior,
        numero,
        clear,
        positiveNegative,
        del,
        btnDivide,
        armNumber,
        btnMultiply,
        btnSubtract,
        btnAdd,
        calculate,
    } = useCalculator();



    return (
        <View style={styles.containerCalculadora}>
            {
                (anterior !== '0') && (<Text style={styles.labelResultSmall}>{anterior}</Text>)
            }

            <Text
                style={styles.labelResult}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
            >
                {numero}
            </Text>

            <View style={styles.row}>
                <ButtonCalc text="C" color={COLORS.grey} action={clear} />
                <ButtonCalc text="+/-" color={COLORS.grey} action={positiveNegative} />
                <ButtonCalc text="del" color={COLORS.grey} action={del} />
                <ButtonCalc text="/" color={COLORS.orange} action={btnDivide} />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="7" color={COLORS.darkGrey} action={armNumber} />
                <ButtonCalc text="8" color={COLORS.darkGrey} action={armNumber} />
                <ButtonCalc text="9" color={COLORS.darkGrey} action={armNumber} />
                <ButtonCalc text="X" color={COLORS.orange} action={btnMultiply} />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="4" color={COLORS.darkGrey} action={armNumber} />
                <ButtonCalc text="5" color={COLORS.darkGrey} action={armNumber} />
                <ButtonCalc text="6" color={COLORS.darkGrey} action={armNumber} />
                <ButtonCalc text="-" color={COLORS.orange} action={btnSubtract} />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="1" color={COLORS.darkGrey} action={armNumber} />
                <ButtonCalc text="2" color={COLORS.darkGrey} action={armNumber} />
                <ButtonCalc text="3" color={COLORS.darkGrey} action={armNumber} />
                <ButtonCalc text="+" color={COLORS.orange} action={btnAdd} />
            </View>

            <View style={styles.row}>
                <ButtonCalc
                    text="0"
                    color={COLORS.darkGrey}
                    ancho={true}
                    action={armNumber}
                />
                <ButtonCalc text="." color={COLORS.darkGrey} action={armNumber} />

                <ButtonCalc text="=" color={COLORS.orange} action={calculate} />
            </View>
        </View>
    );
};
