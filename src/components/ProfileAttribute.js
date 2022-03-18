import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function ProfileAttribute(props) {
  const {title, value} = props;
  return (
    <View style={styles.blockView}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  blockView: {flexDirection: 'row'},
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    width: '50%',
    paddingLeft: '10%',
  },
  text: {fontSize: 20, color: 'white', paddingLeft: '3%'},
});

export default ProfileAttribute;
