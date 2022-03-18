import React from 'react';
import {ActivityIndicator, useColorScheme, View, Modal} from 'react-native';

export const LoadingIndicator = props => {
  const isDarkMode = useColorScheme() === 'dark' ? true : false;

  const {loading} = props;
  return (
    <Modal animationType="fade" transparent={true} visible={loading}>
      <View style={[styles.container]}>
        <View style={[styles.loaderBox(isDarkMode)]}>
          <ActivityIndicator
            size="large"
            color={isDarkMode ? '#ddd' : '#333'}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  loaderBox: isDarkMode => {
    return {
      backgroundColor: isDarkMode ? 'rgba(0,0,0,.7)' : 'rgba(255,255,255,0.9)',
      padding: 30,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
    };
  },
};
