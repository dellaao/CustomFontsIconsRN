/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable prettier/prettier */
import {Image, View, Text, StyleSheet, Button, Alert, TouchableHighlight} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// MaterialIcons

const App = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.defaultText}>Hello Della</Text>
      <Text style={styles.fontText}>Implement Custom Fonts and Icons</Text>
      <View style={styles.card}>
        <Image style={styles.myImage} source={require('./assets/images/people.png')}/>
        <View style={styles.forDetail}>
          <Text style={styles.titleText}>This text use NunitoSans-Bold font</Text>
          <Text style={styles.detailText}>
          And this text use NunitoSans-Italic font.
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          </Text>
          <Text style={styles.iconText}> <Icon name="user" color={'white'} size={20}/> Profile Settings </Text>

          <Icon.Button
          name="facebook"
          backgroundColor="#3b5998"
          style={{marginHorizontal:10, marginVertical: 10, borderRadius: 20, textAlign: 'center'}}
          >
            Facebook
          </Icon.Button>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.bottomBorder}></View>
        <Text>Text Default</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#816CFF',
    flex: 1,
  },
  defaultText:{
    margin: 20,
    marginTop: 30,
    fontSize: 15,
  },
  fontText: {
    marginHorizontal: 20,
    marginTop: 5,
    fontFamily: 'NunitoSans-ExtraBold',
    fontSize: 25,
  },
  card:{
    backgroundColor: '#FFFF',
    borderRadius: 20,
    height: 580,
    marginHorizontal: 15,
    marginVertical: 40,
    bottom: 15,
  },
  myImage:{
    right: 15,
    bottom: 80,
    width: 400,
    height: 400,
  },
  forDetail: {
    bottom: 50,
  },
  titleText: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 20,
    color: '#1E306E',
    marginHorizontal: 20,
    textAlign:'justify',
  },
  detailText: {
    fontFamily: 'NunitoSans-Italic',
    fontSize: 15,
    color: '#1E306E',
    marginHorizontal: 20,
    marginTop: 10,
    textAlign:'justify',
  },
  iconText:{
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 120,
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#FF7F2D',
    borderRadius: 10,
    width: 150,
    height: 30,
  },
  buttonPressMe:{
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 50,
    width: 100,
    marginHorizontal: 140,
  },
  footer:{
    marginTop: 20,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  bottomBorder: {
    borderBottomColor:'white',
    borderBottomWidth: 1,
  }
});

export default App;

