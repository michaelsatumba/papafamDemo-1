import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import YoutubePlayer from 'react-native-youtube-iframe';
import tw from 'tailwind-react-native-classnames';

const MentorshipVideos = () => {
	return (
		<SafeAreaView>
			<Header title="Mentorship Videos" />
			<View style={tw`m-5`}>
				<YoutubePlayer height={200} play={false} videoId={'CSQgyKRj_Fo'} />
			</View>
			<View style={tw`m-5`}>
				<YoutubePlayer height={200} play={false} videoId={'gFvr_9MCfsw'} />
			</View>
			<View style={tw`m-5`}>
				<YoutubePlayer height={200} play={false} videoId={'VA-UN_6oNG8'} />
			</View>
		</SafeAreaView>
	);
};

export default MentorshipVideos;
