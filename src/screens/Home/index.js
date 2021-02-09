/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, FlatList, Image, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, icons, images, SIZES } from '../../constants';

import {
	Container,
	NewPlants,
	TextLabel,
	InnerContainer,
	InnerContainer2,
	Wrapper,
	FlatWrapper,
	FlatListItemLabel,
	ItemLabelText,
	SessionWrapper,
	TodaysShare,
	TSHeader,
	FriendListSessionWrapper,
} from './styles';

const Home = () => {
	// Dummy Data
	const [newPlants, setNewPlants] = useState([
		{
			id: 0,
			name: 'Plant 1',
			img: images.plant1,
			favourite: false,
		},
		{
			id: 1,
			name: 'Plant 2',
			img: images.plant2,
			favourite: true,
		},
		{
			id: 2,
			name: 'Plant 3',
			img: images.plant3,
			favourite: false,
		},
		{
			id: 3,
			name: 'Plant 4',
			img: images.plant4,
			favourite: false,
		},
		{
			id: 4,
			name: 'Plant 5',
			img: images.plant5,
			favourite: false,
		},
	]);

	const [friendList, setFriendList] = useState([
		{
			id: 0,
			img: images.profile1,
		},
		{
			id: 1,
			img: images.profile2,
		},
		{
			id: 2,
			img: images.profile3,
		},
		{
			id: 3,
			img: images.profile4,
		},
		{
			id: 4,
			img: images.profile5,
		},
	]);

	function renderNewPlant(item, index) {
		return (
			<View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: SIZES.base }}>
				<Image
					source={item.img}
					resizeMode="cover"
					style={{
						width: SIZES.width * 0.23,
						height: '83%',
						borderRadius: 15,
					}}
				/>
				<FlatListItemLabel>
					<ItemLabelText>{item.name}</ItemLabelText>
				</FlatListItemLabel>
				<TouchableOpacity
					style={{
						position: 'absolute',
						top: '15%',
						left: 7,
					}}
					onPress={() => { console.log('Pressed'); }}
				>
					<Image
						source={item.favourite ? icons.heartRed : icons.heart}
						resizeMode="contain"
						style={{
							width: 20,
							height: 20,
						}}
					/>
				</TouchableOpacity>
			</View>
		);
	}

	function renderFriendsComponent() {
		if (friendList.length === 0) {
			return (
				<View />
			);
		} else if (friendList.length <= 3) {
			return (
				friendList.map((item, index) => (
					<View
						key={`friend- ${index}`}
						style={index === 0 ? {} : { marginLeft: -20 }}
					>
						<Image
							source={item.img}
							resizeMode="cover"
							style={{
								width: 50,
								height: 50,
								borderRadius: 25,
								borderWidth: 3,
								borderColor: COLORS.primary,
							}}
						/>
					</View>
				))
			);
		} else {
			return (
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					{friendList.map((item, index) => {
						if (index <= 2) {
							return (
								<View
									key={`friend- ${index}`}
									style={index === 0 ? {} : { marginLeft: -20 }}
								>
									<Image
										source={item.img}
										resizeMode="cover"
										style={{
											width: 50,
											height: 50,
											borderRadius: 25,
											borderWidth: 3,
											borderColor: COLORS.primary,
										}}
									/>
								</View>
							);
						}
					})}
					<Text style={{ marginLeft: 5, color: COLORS.secondary, ...FONTS.body3 }}>+{friendList.length - 3} More</Text>
				</View>
			);
		}
	}

	return (
		<Container>
			<NewPlants>
				<InnerContainer>
					<InnerContainer2>
						<Wrapper>
							<TextLabel>New Plants</TextLabel>
							<TouchableOpacity
								onPress={() => {
									console.log('PRESSED');
								}}
							>
								<Image
									source={icons.focus}
									resizeMode="contain"
									style={{
										width: 20,
										height: 20,
									}}
								/>
							</TouchableOpacity>
						</Wrapper>
						<FlatWrapper>
							<FlatList
								horizontal
								showsHorizontalScrollIndicator={false}
								data={newPlants}
								keyExtractor={item => item.id.toString()}
								renderItem={({ item, index }) => renderNewPlant(item, index)}
							/>
						</FlatWrapper>
					</InnerContainer2>
				</InnerContainer>
			</NewPlants>
			<SessionWrapper>
				<TodaysShare>
					<TSHeader>
						<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
							<Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>Today's Share</Text>
							<TouchableOpacity>
								<Text>See All</Text>
							</TouchableOpacity>
						</View>
						<View style={{ flexDirection: 'row', height: '88%', marginTop: SIZES.base }}>
							<View style={{ flex: 1 }}>
								<TouchableOpacity
									style={{
										flex: 1,
									}}
									onPress={() => console.log('Presseeeeed')}
								>
									<Image
										source={images.plant5}
										resizeMode="cover"
										style={{
											width: '100%',
											height: '100%',
											borderRadius: 20,
										}}
									/>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										flex: 1,
										marginTop: SIZES.font,
									}}
									onPress={() => console.log('Presseeeeed')}
								>
									<Image
										source={images.plant6}
										resizeMode="cover"
										style={{
											width: '100%',
											height: '100%',
											borderRadius: 20,
										}}
									/>
								</TouchableOpacity>
							</View>
							<View style={{ flex: 1.3 }}>
								<TouchableOpacity
									style={{
										flex: 1,
										marginLeft: SIZES.font,
									}}
									onPress={() => console.log('Pressiiid')}
								>
									<Image
										source={images.plant7}
										resizeMode="cover"
										style={{
											width: '100%',
											height: '100%',
											borderRadius: 20,
										}}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</TSHeader>
				</TodaysShare>
			</SessionWrapper>
			<FriendListSessionWrapper>
				<View style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
					<View style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}>
						<Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>Added Friends</Text>
						<Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>{friendList.length} Total</Text>

						<View style={{ flexDirection: 'row', height: '60%' }}>
							<View style={{ flex: 1.3, flexDirection: 'row', alignItems: 'center' }}>
								{renderFriendsComponent()}
							</View>
							<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
								<Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>Add New</Text>
								<TouchableOpacity
									style={{
										marginLeft: SIZES.base,
										width: 40,
										height: 40,
										borderRadius: 10,
										alignItems: 'center',
										justifyContent: 'center',
										backgroundColor: COLORS.gray,
									}}
								>
									<Image
										source={icons.plus}
										resizeMode="contain"
										style={{
											width: 20,
											height: 20,
										}}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</FriendListSessionWrapper>
		</Container>
	);
};

export default Home;
