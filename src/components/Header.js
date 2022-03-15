import * as React from 'react';
import {VStack, Box, Divider, Heading} from 'native-base';

function Header({title}) {
  return (
    <VStack mt="12" mb="1" space={5} w="100%" maxW="300px">
      <VStack w="100%" space={5} alignSelf="center">
        <Heading fontSize="lg">{title}</Heading>
      </VStack>
    </VStack>
  );
}

export default Header;
