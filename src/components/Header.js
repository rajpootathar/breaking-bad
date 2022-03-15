import * as React from 'react';
import {VStack, Box, Divider, Heading, HStack} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

function Header({title, isIcon = false}) {
  const navigation = useNavigation();

  return (
    <VStack mt="12" mb="1" space={5} w="100%" maxW="300px">
      <HStack w="100%" space={5} alignSelf="center">
        {isIcon && (
          <Icon
            name="close"
            size={26}
            color="white"
            onPress={() => navigation.goBack()}
          />
        )}
        <Heading fontSize="lg">{title}</Heading>
      </HStack>
    </VStack>
  );
}

export default Header;
