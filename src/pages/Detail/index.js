import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Profile from '../Profile';
import { useNavigation } from '@react-navigation/native';

const Detail = () => {
  const navigation = useNavigation();
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
            navigation.navigate('Home');
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
              navigation.navigate(Profile);
            }}>
            <Image
              source={require('../../images/user.png')}
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
            fontSize: 24,
            fontWeight: '800',
            color: 'black',
            marginVertical: 10,
            marginLeft:20
          }}>
          X
        </Text>
        <Text style={{fontSize: 24, color: 'black', fontWeight:"500", marginLeft:20}}>
          Harga : x
        </Text>
        <View style={{backgroundColor: '#000', width: '100%', height: 2}} />
        <View style={{flexDirection: 'row', marginTop:10, marginLeft:40, justifyContent:'space-evenly'}}>
          <Text style={{fontSize: 13, color: 'black', fontWeight: 'bold'}}>
            Jenis : x{' '}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: 'black',
              fontWeight: 'bold',
              marginHorizontal: 100,
            }}>
            Berat : x kg
          </Text>
        </View>
        
      </View>
    </SafeAreaView>
  )
}

export default Detail