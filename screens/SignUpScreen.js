import React, { useState } from "react";
import { Dimensions, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from '@rneui/themed';

import { assets, COLORS, SIZES } from "../constants";

const SignUpScreen = ({navigation}) => {
  const [data, setData] = useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if( val.length !== 0 ) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false
      });
    }
  }

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    });
  }

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val
    });
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry
    });
  }

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
        <Text style={styles.text_header}>Đăng ký ngay!</Text>
      </View>
      <Animatable.View 
        animation="fadeInUpBig"
        style={styles.footer}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.text_footer}>Tên đăng nhập</Text>
          <View style={styles.action}>
            <Icon name="user-o" type='font-awesome' color={COLORS.strongBlue} size={20} />
            <TextInput 
              placeholder="Tên đăng nhập của bạn"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? 
            <Animatable.View
              animation="bounceIn"
            >
              <Icon name="check-circle" type='feather' color='green' size={20} />
            </Animatable.View>
            : null}
          </View>

          <Text style={[styles.text_footer, {
            marginTop: 35
          }]}>Mật khẩu</Text>
          <View style={styles.action}>
            <Icon name="lock" type='feather' color={COLORS.strongBlue} size={20} />
            <TextInput 
              placeholder="Mật khẩu của bạn"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity
              onPress={updateSecureTextEntry}
            >
              {data.secureTextEntry ? 
              <Icon name="eye-off" type='feather' color='grey' size={20} />
              :
              <Icon name="eye" type='feather' color='grey' size={20} />
              }
            </TouchableOpacity>
          </View>

          <Text style={[styles.text_footer, {
            marginTop: 35
          }]}>Nhập lại mật khẩu</Text>
          <View style={styles.action}>
            <Icon name="lock" type='feather' color={COLORS.strongBlue} size={20} />
            <TextInput 
              placeholder="Nhập lại mật khẩu"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity
              onPress={updateConfirmSecureTextEntry}
            >
              {data.confirm_secureTextEntry ? 
              <Icon name="eye-off" type='feather' color='grey' size={20} />
              :
              <Icon name="eye" type='feather' color='grey' size={20} />
              }
            </TouchableOpacity>
          </View>
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              Bằng cách đăng ký, bạn đã đồng ý với
              <Text style={{fontWeight: 'bold'}}> Điều khoản dịch vụ</Text>
              <Text> và</Text>
              <Text style={{fontWeight: 'bold'}}> Chính sách bảo mật</Text>
              <Text> của chúng tôi</Text>
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {}}
            >
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, {
                color: COLORS.white
              }]}>Đăng ký</Text>
            </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[styles.signIn, {
                borderColor: '#009387',
                borderWidth: 1,
                marginTop: 15
              }]}
            >
              <Text style={[styles.textSign, {
                color: '#009387'
              }]}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

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
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 3,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  logo: {
    width: 110, height: 30,
  },
  text_header: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: SIZES.extraLarge
  },
  text_footer: {
    color: COLORS.strongBlue,
    fontSize: SIZES.large
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.error,
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: COLORS.strongBlue,
  },
  errorMsg: {
    color: COLORS.error,
    fontSize: SIZES.font,
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: SIZES.large,
    fontWeight: 'bold'
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },
  color_textPrivate: {
    color: 'grey'
  }
});