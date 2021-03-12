/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { COLORS, icons, images, FONTS, SIZES } from '../../constants';

import { Container, Requirements, SingleRequirementWrap, Title, RequirementsItems, ActionButton, DetailHeader, BackButton } from './styles';

const RequirementBar = ({ icon, barPercentage }) => {
  return (
    <View style={{ height: 60, alignItems: 'center' }}>
      <View style={{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.gray,
      }}>
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            tintColor: COLORS.secondary,
            width: 30,
            height: 30,
          }}
        />
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.gray,
        }} />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: barPercentage,
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.primary,
        }} />

    </View>
  );
};

const RequirementDetail = ({ icon, label, detail }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            tintColor: COLORS.secondary,
            width: 30,
            height: 30,
          }}
        />

        <Text style={{ marginLeft: SIZES.base, color: COLORS.secondary, ...FONTS.h2 }}>{label}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.h2 }}>{detail}</Text>
      </View>
    </View>
  );
};

const PlantDetail = ({ navigation }) => {

  function renderHeader() {
    return (

      <DetailHeader>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <BackButton onPress={() => { navigation.navigate('Home'); }}>
              <Image
                source={icons.back}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </BackButton>
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
            onPress={() => { console.log('yupe'); }}
          >
            <Image
              source={icons.focus}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', marginTop: '20%' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: COLORS.white, ...FONTS.largeTitle }}>Glory Mantas</Text>
          </View>
          <View style={{ flex: 1 }} />
        </View>
      </DetailHeader>
    );
  }

  function renderRequirementsBar() {
    return (
      <SingleRequirementWrap>
        <RequirementBar
          icon={icons.sun}
          barPercentage="50%"
        />
        <RequirementBar
          icon={icons.drop}
          barPercentage="25%"
        />
        <RequirementBar
          icon={icons.temperature}
          barPercentage="30%"
        />
        <RequirementBar
          icon={icons.garden}
          barPercentage="30%"
        />
        <RequirementBar
          icon={icons.seed}
          barPercentage="90%"
        />
      </SingleRequirementWrap>
    );
  }

  function renderRequirements() {
    return (
      <RequirementsItems>
        <RequirementDetail
          icon={icons.sun}
          label="Sunlight"
          detail="15°C"
        />
        <RequirementDetail
          icon={icons.drop}
          label="Water"
          detail="250 ML Daily"
        />
        <RequirementDetail
          icon={icons.temperature}
          label="Rose Temp"
          detail="35°C"
        />
        <RequirementDetail
          icon={icons.garden}
          label="Soil"
          detail="3 Kg"
        />
        <RequirementDetail
          icon={icons.seed}
          label="Fertilizer"
          detail="150 Mg"
        />
      </RequirementsItems>
    );
  }

  function renderFooter() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        paddingVertical: SIZES.padding,
      }}>
        <ActionButton onPress={() => console.log('werwer')}>
          <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Take Action</Text>

          <Image
            source={icons.chevron}
            resizeMode="contain"
            style={{
              marginLeft: SIZES.padding,
              width: 20,
              height: 20,
            }}
          />
        </ActionButton>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: SIZES.padding }}>
          <Text style={{ flex: 1, color: COLORS.secondary, ...FONTS.h3 }}>Almost 2 weeks of growing time</Text>
          <Image
            source={icons.downArrow}
            resizeMode="contain"
            style={{
              tintColor: COLORS.secondary,
              marginLeft: SIZES.base,
              width: 20,
              height: 20,
            }}
          />
        </View>
      </View>
    );
  }

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
      <Requirements>
        <Title style={{ ...FONTS.h1 }}>Requirements</Title>

        {renderRequirementsBar()}
        {renderRequirements()}
        {renderFooter()}
      </Requirements>
      {renderHeader()}
    </Container>
  );
};

export default PlantDetail;
