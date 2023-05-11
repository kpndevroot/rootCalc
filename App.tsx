import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
  StatusBar,
} from 'react-native';
import FIcons from 'react-native-vector-icons/FontAwesome5';
import {myColors} from './src/styles/Colors';
import {ThemeContext} from './src/context/ThemeContext';
import MyKeyboard from './src/components/MyKeyboard';
import TopBar from './src/components/TopBar';
import Display from './src/utils/Display';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === 'light'
            ? styles.container
            : [styles.container, {backgroundColor: myColors.dark}]
        }>
        <StatusBar
          animated={true}
          backgroundColor={theme === 'light' ? myColors.light : myColors.dark}
        />
        <View style={styles.topBar}>
          <View>
            <FIcons
              name="grip-lines"
              size={25}
              color={theme === 'light' ? myColors.black : myColors.white}
            />
          </View>
          <View>
            <Switch
              value={theme === 'dark'}
              onValueChange={() =>
                setTheme(theme === 'light' ? 'dark' : 'light')
              }
            />
          </View>
        </View>

        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topBar: {
    width: '100%',
    height: Display.setHeight(10),

    backgroundColor: 'transparent',
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
