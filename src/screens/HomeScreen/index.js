import React, {useEffect, useState} from 'react';
import {VStack} from 'native-base';
import {View, Text} from 'react-native';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import MasonryList from 'react-native-masonry-list';
import CharactersService from '../../service/CharactersService';
import Colors from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
function HomeScreen() {
  const [characters, setCharacters] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    CharactersService.find(res =>
      setCharacters(
        res.map(item => {
          item.url = item.img;
          return item;
        }),
      ),
    );
  }, []);

  characters;
  return (
    <VStack px="3" height={'100%'} background={Colors.primary} pb="6">
      <Header
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
      <SearchBar />
      <MasonryList
        onPressImage={character => navigation.navigate('Detail', {character})}
        rerender={true}
        backgroundColor={Colors.primary}
        images={characters}
        renderIndividualFooter={item => (
          <View style={{marginBottom: 2, padding: 5}}>
            <Text style={{color: 'white'}}>{item.name}</Text>
          </View>
        )}
      />
    </VStack>
  );
}

export default HomeScreen;
