/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const [nama, setNama] = useState('');

  return (
    
    <SafeAreaView style={{flex: 1, backgroundColor: '#f3c102'}}>
    <View
      style={{
        flexDirection: 'row',
        width: '80%',
        marginHorizontal: '10%',
        justifyContent: 'space-evenly',
        paddingTop: 20,
      }}>
      <TouchableOpacity
        style={{
          width: 53,
          height: 53,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.navigate('Detail');
        }}>
        <Image
          source={require('../../images/arrow.png')}
          style={{height: 30, width: 30}}
        />
      </TouchableOpacity>
      <Image
        source={require('../../images/profiluser.png')}
        style={{height: 250, width: 250, marginTop: 50}}
      />
      <View
        style={{
          width: 53,
          height: 53,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 5},
          shadowOpacity: 1,
          shadowRadius: 5,
          elevation: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}>
          <Image
            source={require('../../images/home.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </View>
    </View>
    <View
      style={{
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '50%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      }}>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 20,
                color: 'black',
              }}>
              nama
            </Text>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: 'black',
            }}>nama@gmail.com</Text>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: 'black',
              fontWeight:'800'
            }}>Premiun</Text>
      
    </View>
  </SafeAreaView>
  );
};

export default Profile;
