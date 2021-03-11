/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, View } from 'react-native';
import { images } from '../../constants';

import { Container, Requirements } from './styles';

const PlantDetail = () => {
  return (
    <Container>
      <View style={{ height: '35%' }}>
        <Image
          source={images.bannerBg}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>
      <Requirements />

    </Container>
  );
};

export default PlantDetail;
