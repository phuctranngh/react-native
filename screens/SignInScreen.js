import React, { useState } from "react";
import { Alert, Dimensions, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from '@rneui/themed';

import { assets, COLORS, SIZES, STYLES } from "../constants";
import { login } from "../redux/slices/authSlice";

const SignInScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false
      });
    }
  }

  const handlePasswordChange = (val) => {
    if( val.trim().length >= 8 ) {
      setData({
        ...data,
        password: val,
        isValidPassword: true
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false
      });
    }
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }
  
  const handleValidUser = (val) => {
    if( val.trim().length >= 4 ) {
      setData({
        ...data,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        isValidUser: false
      });
    }
  }

  const loginHandle = async (userName, password) => {
    dispatch(login({userName: userName}));
    const serializedState = JSON.stringify({userName: userName});
    await AsyncStorage.setItem('user', serializedState);
    // Alert.alert('Invalid User!', 'Username or password is incorrect.', [
    //   {text: 'Okay'}
    // ]);
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
        <Text style={[styles.text_header, STYLES.CustomFont]}>Xin chào!</Text>
      </View>
      <Animatable.View 
        animation="fadeInUpBig"
        style={[styles.footer, {
            backgroundColor: COLORS.white
        }]}
      >
        <Text style={[styles.text_footer, STYLES.CustomFont]}>Tên đăng nhập</Text>
        <View style={styles.action}>
          <Icon name="user-o" type='font-awesome' color={COLORS.strongBlue} size={20} />
          <TextInput 
            placeholder="Tên đăng nhập của bạn"
            placeholderTextColor="#666666"
            style={[styles.textInput, STYLES.CustomFont]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? 
          <Animatable.View animation="bounceIn">
            <Icon name="check-circle" type='feather' color='green' size={20} />
          </Animatable.View>
          : null}
        </View>
        { data.isValidUser ? null : 
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={[styles.errorMsg, STYLES.CustomFont]}>Tên đăng nhập phải có ít nhất 4 ký tự.</Text>
          </Animatable.View>
        }
          
        <Text style={[styles.text_footer, STYLES.CustomFont, {
          marginTop: 35
        }]}>Mật khẩu</Text>
        <View style={styles.action}>
          <Icon name="lock" type='feather' color={COLORS.strongBlue} size={20} />
          <TextInput 
            placeholder="Mật khẩu của bạn"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[styles.textInput, STYLES.CustomFont]}
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
        { data.isValidPassword ? null : 
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={[styles.errorMsg, STYLES.CustomFont]}>Mật khẩu phải có ít nhất 8 ký tự.</Text>
          </Animatable.View>
        }
          
        <TouchableOpacity>
          <Text style={[STYLES.CustomFont, {color: '#009387', marginTop:15}]}>Quên mật khẩu?</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {loginHandle( data.username, data.password )}}
          >
          <LinearGradient
            colors={['#08d4c4', '#01ab9d']}
            style={styles.signIn}
          >
            <Text style={[styles.textSign, STYLES.CustomFont, {
              color: COLORS.white
            }]}>Đăng nhập</Text>
          </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={[styles.signIn, STYLES.CustomFont, {
              borderColor: '#009387',
              borderWidth: 1,
              marginTop: 15
            }]}
          >
            <Text style={[styles.textSign, STYLES.CustomFont, {
                color: '#009387'
            }]}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

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
  }
});