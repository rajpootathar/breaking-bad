import React, {useEffect, useState} from 'react';
import {VStack} from 'native-base';
import {Text, StyleSheet} from 'react-native';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import CharactersService from '../../service/CharactersService';
import Colors from '../../constants/colors';
import ListItem from '../../components/ListItem';
import {LoadingIndicator} from '../../components/LoadingIndicator';

function HomeScreen() {
  const [characters, setCharacters] = useState([]);
  const [charactersCopy, setCharactersCopy] = useState([]);
  const [isLoading, setLoading] = useState(!characters.length);

  const searchFilterFunction = text => {
    if (text) {
      let searchText = text.trim().toLowerCase();
      const newData = charactersCopy.filter((item, i) => {
        return item.name.toLowerCase().includes(searchText);
      });
      setCharacters(newData);
    } else {
      setCharacters(charactersCopy);
    }
  };

  useEffect(() => {
    CharactersService.find(res => {
      let data = res.map(item => {
        item.url = item.img;
        return item;
      });
      setCharacters(data);
      setCharactersCopy(data);
      setLoading(false);
    });
  }, []);

  return (
    <VStack px="3" height={'100%'} background={Colors.primary} pb="6">
      <Header
        title={
          <Text style={styles.headerText}>
            <Text style={styles.headerInnerText}>Br</Text>
            eaking <Text style={styles.headerInnerText}>Ba</Text>d
          </Text>
        }
      />
      <SearchBar searchFilterFunction={t => searchFilterFunction(t)} />
      {isLoading ? (
        <LoadingIndicator loading={isLoading} size="large" color="black" />
      ) : (
        <ListItem characters={characters} />
      )}
    </VStack>
  );
}

const styles = StyleSheet.create({
  headerText: {color: 'white', fontSize: 28, lineHeight: 35},
  headerInnerText: {fontSize: 32, backgroundColor: 'green', color: 'white'},
});
export default HomeScreen;
