import * as React from 'react';
import Button from './Button';
import {View, Text} from 'react-native';
import {Styles} from '../styles/GlobalStyles';
import {myColors} from '../styles/Colors';
import {ThemeContext} from '../context/ThemeContext';
export default function MyKeyboard() {
  const [firstNumber, setFirstNumber] = React.useState('');
  const [secondNumber, setSecondNumber] = React.useState('');
  const [operation, setOperation] = React.useState('');
  const [result, setResult] = React.useState<number | null>(null);
  const theme = React.useContext(ThemeContext);
  const [displayColor, setDisplayColor] = React.useState<string>(
    theme === 'dark' ? myColors.screen_dark : myColors.screen_light,
  );
  React.useEffect(() => {
    setDisplayColor(
      theme === 'dark' ? myColors.screen_dark : myColors.screen_light,
    );
  }, [theme]);
  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber('');
  };

  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setResult(null);
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
      return (
        <Text
          style={
            result && result < 99999
              ? [Styles.screenFirstNumber]
              : [Styles.screenFirstNumber, {fontSize: 50}]
          }>
          {result?.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === '') {
      return <Text style={Styles.screenFirstNumber}>{'0'}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, {fontSize: 65}]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, {fontSize: 50}]}>
          {firstNumber}
        </Text>
      );
    }
  };

  // const getResult = () => {

  //   switch (operation) {
  //     case '+':
  //       clear();
  //       setResult(parseInt(secondNumber) + parseInt(firstNumber));
  //       break;
  //     case '-':
  //       clear();
  //       setResult(parseInt(secondNumber) - parseInt(firstNumber));
  //       break;
  //     case '*':
  //       clear();
  //       setResult(parseInt(secondNumber) * parseInt(firstNumber));
  //       break;
  //     case '/':
  //       clear();
  //       setResult(parseInt(secondNumber) / parseInt(firstNumber));
  //       break;
  //     default:
  //       clear();
  //       setResult(0);
  //       break;
  //   }

  // };
  const getResult = () => {
    let result;
    switch (operation) {
      case '+':
        result = parseInt(secondNumber) + parseInt(firstNumber);
        break;
      case '-':
        result = parseInt(secondNumber) - parseInt(firstNumber);
        break;
      case '*':
        result = parseInt(secondNumber) * parseInt(firstNumber);
        break;
      case '/':
        result = parseInt(secondNumber) / parseInt(firstNumber);
        break;
      default:
        result = 0;
        break;
    }

    if (isNaN(result)) {
      clear();
      setResult(null);
    } else {
      clear();
      setResult(result);
    }
  };
  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 200,
          width: '95%',

          justifyContent: 'flex-end',
          alignSelf: 'center',
          borderRadius: 24,
          // borderWidth: 2,
          // borderColor: 'white',
          backgroundColor: displayColor,
          marginBottom: 50,
          padding: 3,
        }}>
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{color: '#1A2710', fontSize: 50, fontWeight: '500'}}>
            {operation}
          </Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={Styles.row}>
        <Button title="C" isGray onPress={clear} />
        <Button title="+/-" onPress={() => handleOperationPress('+/-')} />
        <Button title="％" onPress={() => handleOperationPress('％')} />
        <Button title="÷" onPress={() => handleOperationPress('/')} />
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => handleNumberPress('7')} />
        <Button title="8" onPress={() => handleNumberPress('8')} />
        <Button title="9" onPress={() => handleNumberPress('9')} />
        <Button title="×" onPress={() => handleOperationPress('*')} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleNumberPress('4')} />
        <Button title="5" onPress={() => handleNumberPress('5')} />
        <Button title="6" onPress={() => handleNumberPress('6')} />
        <Button title="-" onPress={() => handleOperationPress('-')} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleNumberPress('1')} />
        <Button title="2" onPress={() => handleNumberPress('2')} />
        <Button title="3" onPress={() => handleNumberPress('3')} />
        <Button title="+" onPress={() => handleOperationPress('+')} />
      </View>
      <View style={Styles.row}>
        <Button title="." onPress={() => handleNumberPress('.')} />
        <Button title="0" onPress={() => handleNumberPress('0')} />
        <Button
          title="Del"
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
        />
        <Button title="=" onPress={() => getResult()} />
      </View>
    </View>
  );
}
