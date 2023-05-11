import {View, StyleSheet, Switch} from 'react-native';
import React, {useState} from 'react';
import FIcons from 'react-native-vector-icons/FontAwesome5';
import {myColors} from '../styles/Colors';
import {ThemeContext} from '../context/ThemeContext';
const TopBar = () => {
  const [theme, setTheme] = useState('light');

  return (
    <View style={styles.topBar}>
      <View>
        <FIcons name="grip-lines" size={20} color={myColors.black} />
      </View>
      <View>
        <Switch
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    height: 20,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // height: '7%',
    backgroundColor: 'transparent',
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
