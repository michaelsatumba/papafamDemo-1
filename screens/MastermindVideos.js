import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import YoutubePlayer from 'react-native-youtube-iframe';
import tw from 'tailwind-react-native-classnames';

const MastermindVideos = () => {
	return (
		<SafeAreaView>
			<Header title="Mastermind Videos" />
			<View style={tw`m-5`}>
				<YoutubePlayer height={200} play={false} videoId={'NZEUDJvpQMM'} />
			</View>
			<View style={tw`m-5`}>
				<YoutubePlayer height={200} play={false} videoId={'MqDlsjc8GLo'} />
			</View>
			<View style={tw`m-5`}>
				<YoutubePlayer height={200} play={false} videoId={'QaYts9sPmcY'} />
			</View>
		</SafeAreaView>
	);
};

export default MastermindVideos;
