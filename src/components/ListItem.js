import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MasonryList from 'react-native-masonry-list';
import Colors from '../constants/colors';
import {useNavigation} from '@react-navigation/native';

function ListItem(props) {
  const navigation = useNavigation();
  const {characters} = props;
  return (
    <>
      {characters.length ? (
        <MasonryList
          onPressImage={character => navigation.navigate('Detail', {character})}
          rerender={true}
          backgroundColor={Colors.primary}
          images={characters}
          renderIndividualFooter={item => (
            <View style={styles.nameView}>
              <Text style={{color: 'white'}}>{item.name}</Text>
            </View>
          )}
        />
      ) : (
        <View style={styles.notMatchView}>
          <Text style={styles.notMatchText}>
            -> Input Is Not Match With Any Field
          </Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  nameView: {marginBottom: 2, padding: 5},
  notMatchView: {
    margin: '10%',
    padding: '2%',
    borderRadius: 30,
    height: '80%',
  },
  notMatchText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    textTransform: 'capitalize',
    top: -2,
  },
});

export default ListItem;
