import React, {useEffect, useState} from 'react';
import {VStack} from 'native-base';
import {Image, Text} from 'react-native';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import MasonryList from 'react-native-masonry-list';
import CharactersService from '../../service/CharactersService';
import Colors from '../../constants/colors';

function DetailScreen({route}) {
  const character = route?.params?.character;
  console.log(character);
  return (
    <VStack px="3" height={'100%'} background={Colors.primary} pb="6">
      <Header
        isIcon={true}
        title={
          <Text style={{color: 'white', fontSize: 28, lineHeight: 35}}>
            <Text
              style={{fontSize: 32, backgroundColor: 'green', color: 'white'}}>
              Br
            </Text>
            eaking{' '}
            <Text
              style={{fontSize: 32, backgroundColor: 'green', color: 'white'}}>
              Ba
            </Text>
            d
          </Text>
        }
      />
      <VStack>
        <Image
          source={{uri: character.url}}
          style={{
            height: '60%',
            width: '100%',
            borderRadius: 10,
          }}
        />
        <Text>{character.nickname}</Text>
      </VStack>
    </VStack>
  );
}

export default DetailScreen;
