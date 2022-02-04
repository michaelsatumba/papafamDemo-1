import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import GithubScreen from './screens/GithubScreen';
import HeroScreen from './screens/HeroScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MastermindScreen from './screens/MastermindScreen';
import MastermindVideos from './screens/MastermindVideos';
import MentorshipScreen from './screens/MentorshipScreen';
import MentorshipVideos from './screens/MentorshipVideos';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Hero" component={HeroScreen} />
			<Stack.Screen name="Mastermind" component={MastermindScreen} />
			<Stack.Screen name="MastermindVideos" component={MastermindVideos} />
			<Stack.Screen name="Mentorship" component={MentorshipScreen} />
			<Stack.Screen name="MentorshipVideos" component={MentorshipVideos} />
			<Stack.Screen name="Github" component={GithubScreen} />
		</Stack.Navigator>
	);
};

export default StackNavigator;
