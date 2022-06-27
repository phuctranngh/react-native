import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: "#22c9e0",
  secondary: "#EFF9FF",

  black: "#171717",
  gray: "#74858C",
  orange: '#F8AD2C',
  red: '#e32f45',
  yellow: '#fdf22d',
  white: "#FFF",
  
  lightBlue: '#7af9f7',
  mediumBlue: '#3498db',
  strongBlue: '#05375a',
  transBlue: '#c6faf9',
  
  success: '#00C851',
  error: '#FF0000',

  background: "#252C4A"
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 30,
  
  width,
  height
};

export const FONTS = {
  bold: "InterBold",
  semiBold: "InterSemiBold",
  medium: "InterMedium",
  regular: "InterRegular",
  light: "InterLight",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};

export const STYLES = StyleSheet.create({
  CustomFont: {
    fontFamily: FONTS.regular
  },
});