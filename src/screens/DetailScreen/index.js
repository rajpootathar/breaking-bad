import React, {useEffect, useState} from 'react';
import {Image, Text, ImageBackground, View, StyleSheet} from 'react-native';

import Header from '../../components/Header';
import ProfileAttribute from '../../components/ProfileAttribute';

function DetailScreen({route}) {
  const character = route?.params?.character;
  console.log(character);
  return (
    <ImageBackground
      source={{uri: character.url}}
      style={styles.imageBackground}>
      <View style={styles.overlay}></View>
      <Header
        isIcon={true}
        title={<Text style={styles.name}>{character.name}</Text>}
      />
      <View style={styles.content}>
        <Text style={styles.information}>Information</Text>
        <View style={styles.attributeblock}>
          <ProfileAttribute title={'NickName'} value={character.nickname} />
          <ProfileAttribute title={'Occupation'} value={character.occupation} />
          <ProfileAttribute title={'Portrayed'} value={character.portrayed} />
          <ProfileAttribute title={'Birthday'} value={character.birthday} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  name: {color: 'white', fontSize: 28, lineHeight: 35},
  information: {fontSize: 24, textAlign: 'center', fontWeight: 'bold'},
  content: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 25,
    backgroundColor: 'rgba(255,165,0,0.3)',
    borderRadius: 25,
    justifyContent: 'space-between',
    height: '35%',
  },
  attributeblock: {
    justifyContent: 'space-between',
    height: '70%',
    bottom: '3%',
  },
});

export default DetailScreen;
