import {TextInput, View,StyleSheet} from "react-native";
import {useEffect, useRef, useState} from "react";

export function VerificationCodeInput({codeLength,onCodeFilled}){
     const codeInputs = useRef([]);
    const [code, setCode] = useState(Array(codeLength).fill(''));

    useEffect(() => {
        if (code.join('').length === codeLength) {
            onCodeFilled(code?.join(''));
        }
    }, [code, codeLength, onCodeFilled]);

      const handleCodeInputKeyPress = (index,key) => {
          if (key === 'Backspace' && !code[index] && index > 0) {
              codeInputs.current[index - 1].focus();
          }

     }
     const handleCodeChange = (index,value) => {

         const updatedCode = [...code];
         updatedCode[index] = value;
         setCode(updatedCode);
          if (value && index < codeLength - 1) {
             codeInputs.current[index + 1].focus();
         } else if (!value && index > 0) {
             codeInputs.current[index - 1].focus();
         }

      }
     const renderInputs = () => {
        const inputs = [];
        for (let i=0; i < codeLength; i++) {
            inputs.push(
                <TextInput
                    key={i}
                    style={styles.input}
                    maxLength={1}
                    onChangeText={(value) => handleCodeChange(i,value)}
                    onKeyPress={({nativeEvent:{key}}) => {
                        handleCodeInputKeyPress(i,key)
                    }}e
                    ref={(ref) => {
                        codeInputs.current[i] = ref
                    }
                }
                    keyboardType="numeric"



                />
            )
        }
       return inputs;
    }




    return(
        <View className="flex-row items-center justify-center mt-6">
            {renderInputs()}
        </View>
    )
}
const styles = StyleSheet.create({
     input:{
         width:59,
         height:52,
         borderWidth: 1,
         borderColor: '#668DDD',
         borderRadius: 26,
         flexShrink: 0,
         backgroundColor: '#f9f9f9',
         fontSize: 14,
         fontWeight: "bold",
         textAlign: "center",
         marginRight:4,
         marginLeft: 4
     }
})