import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CourseList from '../components/CourseList';

const HeroScreen = () => {
	return (
		<SafeAreaView>
			<Header title="Zero to Full Stack Hero" />
			<CourseList />
		</SafeAreaView>
	);
};

export default HeroScreen;
