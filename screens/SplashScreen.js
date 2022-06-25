import React from "react";
import { Dimensions, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from '@rneui/themed';

import { assets, COLORS, SIZES } from "../constants";

const Splash = ({navigation}) => {

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content"/>
      <LinearGradient
        colors={[COLORS.primary, COLORS.yellow]}
        start={{ x: 0.4, y: 0.3 }}
        end={{ x: 0.6, y: 0.9 }}
        locations={[0, 1]}
        style={styles.background}
      />
      <View style={styles.header}>
        <Animatable.Image 
          animation="bounceIn"
          duraton="1500"
          source={assets.logo}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View 
        style={[styles.footer, {
            backgroundColor: COLORS.white
        }]}
        animation="fadeInUpBig"
      >
        <Text style={[styles.title]}>Bắt đầu trải nghiệm!</Text>
        <Text style={styles.text}>Hãy đăng nhập bằng tài khoản</Text>
        <View style={styles.button}>
        <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
          <LinearGradient
            colors={['#08d4c4', '#01ab9d']}
            style={styles.signIn}
          >
            <Text style={styles.textSign}>Bắt đầu</Text>
            <Icon name="navigate-next" type='material' color={COLORS.white} size={20} />
          </LinearGradient>
        </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Splash;

const { height, width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: height,
    width: width,
    position: "absolute",
  }, 
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: COLORS.strongBlue,
    fontWeight: 'bold',
    fontSize: SIZES.extraLarge,
  },
  footer: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row"
  },
  textSign: {
    color: COLORS.white,
    fontWeight: 'bold'
  }
});