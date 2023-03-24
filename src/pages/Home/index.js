/* eslint-disable prettier/prettier */
import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import ComTextInput from '../../common/ComTextInput';
import ComButton from '../../common/ComButton';
import {useNavigation} from '@react-navigation/native';
import Detail from '../Detail';

const Home = () => {
  const navigation = useNavigation();
  const [namaProduk, onChangeNamaProduk] = useState('');
  const [harga, onChangeHarga] = useState('');
  const [berat, onChangeWeight] = useState('');
  const [Jenis, onChangeJenis] = useState('');
  
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <View>
          <Image
            source={require('../../images/Logo.png')}
            style={{
              width: 100,
              height: 100,
              alignSelf: 'center',
              marginTop: 70,
            }}
          />
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 10,
              fontSize: 30,
              color: '#f3c10d',
              fontWeight: '600',
            }}>
            Toko Ramadhan
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              marginTop: 20,
              padding: 20,
              marginBottom :20,
              borderRadius: 20,
              marginLeft: 20,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <ComTextInput
              value={namaProduk}
              onChangeText={onChangeNamaProduk}
              style={{marginTop: 10}}
              placeholder={'Enter Nama Produk'}
              name={'Nama Produk :'}
              icon ={require('../../images/product.png')}
            />
            <ComTextInput
              value={harga}
              onChangeText={onChangeHarga}
              placeholder={'Masukkan Harga'}
              name={'Harga :'}
              icon ={require('../../images/bookmark.png')}
            />
           <ComTextInput
          value={Jenis}
          onChangeText={onChangeJenis}
          style={{marginTop: 10}}
          placeholder={'Jenis Barang'}
          name={'Jenis :'}
          icon ={require('../../images/tag.png')}
        />
        <ComTextInput
          value={berat}
          onChangeText={onChangeWeight}
          style={{marginTop: 10}}
          placeholder={'Berat dalam Kilogram'}
          name={'Berat :'}
          icon ={require('../../images/heavy.png')}
        />
            <ComButton
              title={'Detail'}
              bgColor={'#f3c10d'}
              textColor={'#ffff'}
              onPress={()=>{navigation.navigate(Detail)}}
            />
          </View>
        </View>
    
      </View>
    </ScrollView>
  );
};

export default Home;
