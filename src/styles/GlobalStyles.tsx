import {StyleSheet} from 'react-native';
import {myColors} from './Colors';

export const Styles = StyleSheet.create({
  // Button
  btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnDark: {
    width: 72,
    height: 72,
    boxSizing: 'border-box',
    backgroundColor: myColors.btnDark,
    shadowColor: 'rgba(255, 255, 255, 0.23)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 3,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.white,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.btnGray,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  smallTextLight: {
    fontSize: 30,
    color: myColors.white,
  },
  CText: {
    fontSize: 30,
    color: myColors.c_text,
  },
  smallTextDark: {
    fontSize: 30,
    color: myColors.black,
  },
  // Keyboard
  row: {
    maxWidth: '95%',
    flexDirection: 'row',
  },
  viewBottom: {
    display: 'flex',
    flexDirection: 'column',
    width: '95%',
    maxWidth: '95%',
    justifyContent: 'center',
    alignItems: 'center',

    // position: 'absolute',
    // bottom: 20,
    // borderWidth: 2,
    // borderColor: 'white',
  },
  screenFirstNumber: {
    fontSize: 70,

    color: myColors.dark_Screen_text,
    fontWeight: '800',
    alignSelf: 'flex-end',
  },
  screenSecondNumber: {
    fontSize: 40,
    color: myColors.light_Screen_text,
    fontWeight: '400',
    alignSelf: 'flex-end',
    // borderWidth: 2,
    // borderColor: 'white',
  },
});
