import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const Header = ({ title }) => {
	const navigation = useNavigation();

	return (
		<View style={tw`flex-row items-center justify-between px-5 mb-5`}>
			<TouchableOpacity onPress={() => navigation.goBack()} style={tw`p-2`}>
				<Ionicons name="chevron-back-outline" size={34} color="#F8ad05" />
			</TouchableOpacity>

			<Text style={tw`text-xl font-bold pl-2`}>{title}</Text>

			<TouchableOpacity onPress={() => navigation.navigate('Login')}>
				<Image
					style={tw`h-10 w-10 rounded-full`}
					source={{
						uri: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg',
					}}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default Header;
