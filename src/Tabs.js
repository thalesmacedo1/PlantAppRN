/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/Home';

import { icons, COLORS } from './constants';

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: '10%',
    },
};

const CameraButton = () => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: COLORS.primary,
            }}>
            <Image
                source={icons.camera}
                resizeMode="contain"
                style={{
                    width: 23,
                    height: 23,
                }}
            />
        </View>
    );
};

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray;

                    switch (route.name) {
                        case 'Home':
                            return (
                                <Image
                                    source={icons.flash}
                                    resizeMode="contain"
                                    style={{
                                        tintColor,
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            );
                        case 'Box':
                            return (
                                <Image
                                    source={icons.cube}
                                    resizeMode="contain"
                                    style={{
                                        tintColor,
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            );
                        case 'Camera':
                            return <CameraButton />;
                        case 'Search':
                            return (
                                <Image
                                    source={icons.search}
                                    resizeMode="contain"
                                    style={{
                                        tintColor,
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            );
                        case 'Favourite':
                            return (
                                <Image
                                    source={icons.heart}
                                    resizeMode="contain"
                                    style={{
                                        tintColor,
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            );
                    }
                },
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Box" component={HomeScreen} />
            <Tab.Screen name="Camera" component={HomeScreen} />
            <Tab.Screen name="Search" component={HomeScreen} />
            <Tab.Screen name="Favourite" component={HomeScreen} />
        </Tab.Navigator>
    );
};

export default Tabs;
