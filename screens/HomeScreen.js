import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	Image,
} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView>
			{/* Header */}
			<View style={tw`flex-row items-center justify-between px-5 mb-5`}>
				<TouchableOpacity onPress={() => navigation.navigate('Login')}>
					<Text style={tw`text-xl text-black p-2 font-bold`}>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Login')}>
					<Image
						style={tw`h-10 w-10 rounded-full`}
						source={{
							uri: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg',
						}}
					/>
				</TouchableOpacity>
			</View>

			{/* Hero */}
			<View style={tw`flex items-center m-5`}>
				<TouchableOpacity onPress={() => navigation.navigate('Hero')}>
					<Image
						style={tw`h-32 w-56`}
						source={{
							uri: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/AvEitaglSWyxnOHmJ77l_file.jpg',
						}}
					/>
				</TouchableOpacity>
			</View>
			{/* Mastermind */}
			<View style={tw`flex items-center m-5`}>
				<TouchableOpacity onPress={() => navigation.navigate('Mastermind')}>
					<Image
						style={tw`h-32 w-56`}
						source={{
							uri: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/FC9Ka0lmQu2wO6Pb6lAB_file.jpg',
						}}
					/>
				</TouchableOpacity>
			</View>

			{/* Mentorship */}
			<View style={tw`flex items-center m-5`}>
				<TouchableOpacity onPress={() => navigation.navigate('Mentorship')}>
					<Image
						style={tw`h-32 w-56`}
						source={{
							uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWCQGTz6kz9cfExxe1Amm1XWN6STFTeHfTEw&usqp=CAU',
						}}
					/>
				</TouchableOpacity>
			</View>

			{/* Github */}
			<View style={tw`flex items-center m-5`}>
				<TouchableOpacity onPress={() => navigation.navigate('Github')}>
					<Image
						style={tw`h-32 w-56`}
						source={{
							uri: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/JbGKaEH6SGeEEZKKaHlr_NWq9oIXhTqyZhYoJPoTz_PAPA_GitHub_Access_resume_THUMBNAIL.jpg',
						}}
					/>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
