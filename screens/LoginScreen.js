import {
	View,
	Text,
	Button,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const LoginScreen = () => {
	const navigation = useNavigation();

	return (
		<View style={tw`flex-1 bg-yellow-500`}>
			<ImageBackground
				resizeMode="contain"
				style={tw`flex-1`}
				source={{
					uri: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg',
				}}
			>
				<TouchableOpacity
					style={[
						tw`absolute bottom-40 w-52 bg-white p-4 rounded-2xl`,
						{ marginHorizontal: '25%' },
					]}
					onPress={() => navigation.navigate('Home')}
				>
					<Text style={tw`font-semibold text-center`}>Sign In</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
};

export default LoginScreen;
