import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const MentorshipScreen = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView>
			<Header title="Mentorship" />
			<View style={tw`flex items-center justify-around`}>
				<View>
					<Text style={tw`text-xl text-black font-bold`}>
						The Weekly PAPA Mentorship Coaching Call!
					</Text>
					<Text style={tw`text-base text-gray-500 p-2`}>
						Grab your coffee, buckle up & get ready for the PAPA Coaching call,
						I'll see you inside!
					</Text>
				</View>

				<View>
					<Text style={tw`text-base text-black p-2 font-bold`}>
						🕜 The schedule for the coaching calls can be found below!
					</Text>
					<Text style={tw`text-base text-red-500 p-2 font-bold`}>
						To join a coaching call simply click the button below during PAPA
						Mentorship Call Hours!
					</Text>
				</View>

				<View>
					<Text style={tw`text-base text-black p-2`}>
						PAPA Mentorship Fortnight Call (UTC)
					</Text>
					<Text style={tw`text-base text-black p-2 font-bold`}>
						Thurs 26th Jan 4:00pm - 7:00pm
					</Text>

					<Text style={tw`text-base text-black p-2 font-bold`}>
						Thurs 2nd Feb 4:00pm - 7:00pm
					</Text>

					<Text style={tw`text-base text-black p-2 font-bold`}>
						Thurs 9th Feb 4:00pm - 7:00pm
					</Text>
				</View>

				<View>
					<TouchableOpacity
						style={tw`w-64 p-3 rounded-xl mt-5 bg-red-400`}
						onPress={() => navigation.navigate('Home')}
					>
						<Text style={tw`text-center text-white text-xl`}>
							Join the Mentorship Call
						</Text>
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity
						style={tw`w-64 p-3 rounded-xl mt-5 bg-red-400`}
						onPress={() => navigation.navigate('MentorshipVideos')}
					>
						<Text style={tw`text-center text-white text-xl`}>
							Previous Mentorship Calls
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default MentorshipScreen;
