import React , {useState, useRef} from 'react';
enum Operators {

    add, subtract, multiply, divide

}

export const useCalculator = () => {
 
    const [numero, setNumero] = useState("0");
    const [anterior, setAnterior] = useState("0");

    const ultimateOperator = useRef<Operators>()


    const clear = () => {
        setNumero("0");
        setAnterior("0");
    };

    const armNumber = (arm: string) => {
        //no aceptar doble punto
        if (numero.includes(".") && arm === ".") return;

        if (numero.startsWith("0") || numero.startsWith("-0")) {
            //primer punto decimal
            if (arm === ".") {
                setNumero(numero + arm);
            } else if (arm === "0" && numero.includes(".")) {
                setNumero(numero + arm);
            } else if (arm !== "0" && !numero.includes(".")) {
                setNumero(arm);
            } else if (arm === '0' && !numero.includes('.')) {
                setNumero(numero);
            } else {
                setNumero(numero + arm);
            }
        } else {
            setNumero(numero + arm);
        }
    };

    const positiveNegative = () => {
        if (numero.includes("-")) {
            setNumero(numero.replace("-", ""));
        } else {
            setNumero("-" + numero);
        }
    };

    const del = () => {

        const str = numero;
        const newNumber: string = str.substring(0, str.length - 1);

        if (newNumber.trim() == "" || newNumber.startsWith("-")) {
            setNumero('0');
        } else {
            setNumero(newNumber);
        }

    };

    const changePrevious = () => {

        if (numero.endsWith('.')) {
            setAnterior(numero.slice(0, -1));
        } else {
            setAnterior(numero);

        }
        setNumero('0');
    };




    const btnDivide = () => {
        changePrevious();
        ultimateOperator.current = Operators.divide
    };



    const btnMultiply = () => {
        changePrevious();
        ultimateOperator.current = Operators.multiply
    };


    const btnSubtract = () => {
        changePrevious();
        ultimateOperator.current = Operators.subtract
    }


    const btnAdd = () => {
        changePrevious();
        ultimateOperator.current = Operators.add
    }

    const calculate = () => {

        const number1 = Number(numero);
        const number2 = Number(anterior);

        switch (ultimateOperator.current) {

            case Operators.add:
                setNumero(`${number1 + number2}`);
                break;

            case Operators.multiply:
                setNumero(`${number1 * number2}`);
                break;

            case Operators.divide:
                setNumero(`${number2 / number1}`);
                break;

            case Operators.subtract:
                setNumero(`${number2 - number1}`);
                break;

          
        }
        setAnterior('0');
    }


    return {
        anterior,
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

    }
};
