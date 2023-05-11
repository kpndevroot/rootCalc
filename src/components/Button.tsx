import {useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {Styles} from '../styles/GlobalStyles';

interface ButtonProps {
  onPress: () => void;
  title: string;
  //   isBlue?: boolean;
  isGray?: boolean;
}

export default function Button({title, onPress, isGray}: ButtonProps) {
  const theme = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={
        isGray && theme === 'light'
          ? Styles.btnLight
          : theme === 'light'
          ? Styles.btnLight
          : Styles.btnDark
      }
      onPress={onPress}>
      <Text
        style={
          isGray
            ? Styles.CText
            : theme === 'dark'
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
