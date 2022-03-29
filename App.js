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
          <TouchableHighlight style={styles.buttonPressMe}>
            <Button
              color="#FF7F2D"
              // #FEDB92
              onPress={() => Alert.alert('Tertekan')}
              title="Press Me"
            />
          </TouchableHighlight>
          <Icon.Button
          name="facebook"
          backgroundColor="#3b5998"
          >
            Login with Facebook
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
  buttonPressMe:{
    marginTop: 20,
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

