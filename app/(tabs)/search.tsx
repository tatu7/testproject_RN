import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	FlatList,
	ScrollView,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

const Search = () => {
	const reelsData = [
		{
			id: "1",
			image:
				"https://s3-alpha-sig.figma.com/img/78e3/2b87/1a3e5ea3cf1d2980ff751d5890083fb4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X1Aa3iGzMv3z3W4mFBtXqYgjIrwYExL1DxqFyPXPafFkJcyaND3NWAiTyJlIvH3ylC2pv6zEs~08TFEt-sCy-mbsdoFdLzZh2HFlobdTLTnJeWGayY6CBB1vqI3f6LAQRioFVvK8iZa5CBnRC0cCNUDSBulk4tbdEpL2sE2FNyivlOQYqX71nG6Q6U4z6xSNzb9JaP4QL-hhf6CH0RgjTwjRlnEvHssZtzF3YdqhPx69Nb1H5kfB8D7NSWdhgcu3T9tYyfCF4xO~CsAQdqcypoRBEiCp-lDXR~JNnXvVHv-TLE~l0MwPd~HERYexGoHSrGai5ZhuWHUhH7H~8ylDyA__",
			views: "1.2k",
		},
		{
			id: "2",
			image:
				"https://s3-alpha-sig.figma.com/img/78e3/2b87/1a3e5ea3cf1d2980ff751d5890083fb4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X1Aa3iGzMv3z3W4mFBtXqYgjIrwYExL1DxqFyPXPafFkJcyaND3NWAiTyJlIvH3ylC2pv6zEs~08TFEt-sCy-mbsdoFdLzZh2HFlobdTLTnJeWGayY6CBB1vqI3f6LAQRioFVvK8iZa5CBnRC0cCNUDSBulk4tbdEpL2sE2FNyivlOQYqX71nG6Q6U4z6xSNzb9JaP4QL-hhf6CH0RgjTwjRlnEvHssZtzF3YdqhPx69Nb1H5kfB8D7NSWdhgcu3T9tYyfCF4xO~CsAQdqcypoRBEiCp-lDXR~JNnXvVHv-TLE~l0MwPd~HERYexGoHSrGai5ZhuWHUhH7H~8ylDyA__",
			views: "1.2k",
		},
		{
			id: "3",
			image:
				"https://s3-alpha-sig.figma.com/img/78e3/2b87/1a3e5ea3cf1d2980ff751d5890083fb4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X1Aa3iGzMv3z3W4mFBtXqYgjIrwYExL1DxqFyPXPafFkJcyaND3NWAiTyJlIvH3ylC2pv6zEs~08TFEt-sCy-mbsdoFdLzZh2HFlobdTLTnJeWGayY6CBB1vqI3f6LAQRioFVvK8iZa5CBnRC0cCNUDSBulk4tbdEpL2sE2FNyivlOQYqX71nG6Q6U4z6xSNzb9JaP4QL-hhf6CH0RgjTwjRlnEvHssZtzF3YdqhPx69Nb1H5kfB8D7NSWdhgcu3T9tYyfCF4xO~CsAQdqcypoRBEiCp-lDXR~JNnXvVHv-TLE~l0MwPd~HERYexGoHSrGai5ZhuWHUhH7H~8ylDyA__",
			views: "1.2k",
		},
		{
			id: "4",
			image:
				"https://s3-alpha-sig.figma.com/img/78e3/2b87/1a3e5ea3cf1d2980ff751d5890083fb4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X1Aa3iGzMv3z3W4mFBtXqYgjIrwYExL1DxqFyPXPafFkJcyaND3NWAiTyJlIvH3ylC2pv6zEs~08TFEt-sCy-mbsdoFdLzZh2HFlobdTLTnJeWGayY6CBB1vqI3f6LAQRioFVvK8iZa5CBnRC0cCNUDSBulk4tbdEpL2sE2FNyivlOQYqX71nG6Q6U4z6xSNzb9JaP4QL-hhf6CH0RgjTwjRlnEvHssZtzF3YdqhPx69Nb1H5kfB8D7NSWdhgcu3T9tYyfCF4xO~CsAQdqcypoRBEiCp-lDXR~JNnXvVHv-TLE~l0MwPd~HERYexGoHSrGai5ZhuWHUhH7H~8ylDyA__",
			views: "1.2k",
		},
		{
			id: "5",
			image:
				"https://s3-alpha-sig.figma.com/img/78e3/2b87/1a3e5ea3cf1d2980ff751d5890083fb4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X1Aa3iGzMv3z3W4mFBtXqYgjIrwYExL1DxqFyPXPafFkJcyaND3NWAiTyJlIvH3ylC2pv6zEs~08TFEt-sCy-mbsdoFdLzZh2HFlobdTLTnJeWGayY6CBB1vqI3f6LAQRioFVvK8iZa5CBnRC0cCNUDSBulk4tbdEpL2sE2FNyivlOQYqX71nG6Q6U4z6xSNzb9JaP4QL-hhf6CH0RgjTwjRlnEvHssZtzF3YdqhPx69Nb1H5kfB8D7NSWdhgcu3T9tYyfCF4xO~CsAQdqcypoRBEiCp-lDXR~JNnXvVHv-TLE~l0MwPd~HERYexGoHSrGai5ZhuWHUhH7H~8ylDyA__",
			views: "1.2k",
		},
		{
			id: "6",
			image:
				"https://s3-alpha-sig.figma.com/img/78e3/2b87/1a3e5ea3cf1d2980ff751d5890083fb4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X1Aa3iGzMv3z3W4mFBtXqYgjIrwYExL1DxqFyPXPafFkJcyaND3NWAiTyJlIvH3ylC2pv6zEs~08TFEt-sCy-mbsdoFdLzZh2HFlobdTLTnJeWGayY6CBB1vqI3f6LAQRioFVvK8iZa5CBnRC0cCNUDSBulk4tbdEpL2sE2FNyivlOQYqX71nG6Q6U4z6xSNzb9JaP4QL-hhf6CH0RgjTwjRlnEvHssZtzF3YdqhPx69Nb1H5kfB8D7NSWdhgcu3T9tYyfCF4xO~CsAQdqcypoRBEiCp-lDXR~JNnXvVHv-TLE~l0MwPd~HERYexGoHSrGai5ZhuWHUhH7H~8ylDyA__",
			views: "1.2k",
		},
	];

	const renderReelItem = ({
		item,
	}: {
		item: { id: string; image: string; views: string };
	}) => (
		<View style={styles.reelItem}>
			<Image source={{ uri: item.image }} style={styles.reelImage} />
			<View style={styles.reelOverlay}>
				<Ionicons name='play-circle-outline' size={24} color='white' />
				<Text style={styles.reelViews}>{item.views}</Text>
			</View>
		</View>
	);

	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<Ionicons
					name='chevron-back'
					size={20}
					color='white'
					style={styles.icon}
				/>
				<Text style={styles.headerTitle}>Audio</Text>
				<View style={styles.headerIcons}>
					<Ionicons
						name='paper-plane-outline'
						style={styles.icon}
						size={20}
						color='white'
					/>
					<Ionicons
						name='bookmark-outline'
						size={20}
						color='white'
						style={styles.icon}
					/>
					<Ionicons
						name='code-sharp'
						size={20}
						color='white'
						style={styles.icon}
					/>
				</View>
			</View>
			<View style={styles.audioInfo}>
				<Image
					source={{
						uri: "https://s3-alpha-sig.figma.com/img/086e/7546/3c651f7f3f278e1bb1ebde628666c259?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m-y1b~FGibAUm25pe52KBhbftUFWzmNR~95cjyE09x~iZgSuDyGi54IFjrNnbxvEIoUP~DXyySZ7PicJj9RJz5dHdHK00svWeTYeCW2IhadxSxVxwBOB5Gms-owz~U0kUqK8w0Gitubj0koCfwe6HUY2uPlUa1YKidGKWY4YLWeWrZSGNG5XTmyMgsTbd3umQHO3BwSKSJwFg6HeA8JFxm9d2-KLWnb8V6NEBboNJ5oWiptdYVMetd4dEAryeyTeAU~wHTrCBlsLrb0lUq05eeq-OwvQ68TXjLUj7MwWc3DJDJkAzgsJ623nvxRdc8VUsVaOAfo-fWZqSU1gWUTQJQ__",
					}}
					style={styles.audioImage}
				/>
				<View style={styles.audioDetails}>
					<Text style={styles.audioTitle}>ATom music</Text>
					<Text style={styles.audioArtist}>Sarah_tom</Text>
					<Text style={styles.audioReels}>25 Reels</Text>
				</View>
			</View>
			<TouchableOpacity style={styles.useAudioButton}>
				<Text style={styles.useAudioButtonText}>Use audio</Text>
			</TouchableOpacity>
			<View style={styles.audioProgress}>
				<Ionicons name='volume-high-outline' size={24} color='white' />
				<Slider
					style={styles.slider}
					minimumValue={5}
					value={3}
					maximumValue={10}
					minimumTrackTintColor='#06B071'
					maximumTrackTintColor='#3E3E3E'
					thumbTintColor='#06B071'
				/>
				<Text style={styles.audioDuration}>2:00</Text>
			</View>
			<FlatList
				data={reelsData}
				renderItem={renderReelItem}
				keyExtractor={(item) => item.id}
				numColumns={3}
				contentContainerStyle={styles.reelsContainer}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1c1c1e",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		padding: 16,
		marginTop: 28,
	},
	headerTitle: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
	headerIcons: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: 100,
		gap: 13,
	},
	audioInfo: {
		flexDirection: "row",
		alignItems: "center",
		padding: 16,
	},
	audioImage: {
		width: 60,
		height: 60,
		borderRadius: 10,
	},
	audioDetails: {
		marginLeft: 16,
	},
	audioTitle: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	audioArtist: {
		color: "gray",
		fontSize: 14,
	},
	audioReels: {
		color: "gray",
		fontSize: 14,
	},
	useAudioButton: {
		backgroundColor: "#06B071",
		borderRadius: 20,
		paddingVertical: 10,
		paddingHorizontal: 20,
		alignSelf: "center",
		width: "90%",
		marginVertical: 20,
	},
	useAudioButtonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
	audioProgress: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 16,
		marginBottom: 16,
	},
	progressBar: {
		flex: 1,
		height: 12,
		backgroundColor: "gray",
		borderRadius: 10,
		marginHorizontal: 8,
	},
	progress: {
		width: "50%",
		height: "100%",
		backgroundColor: "#06B071",
		borderRadius: 10,
	},
	audioDuration: {
		color: "white",
		fontSize: 14,
	},
	reelsContainer: {
		paddingHorizontal: 2,
		gap: 0,
	},
	reelItem: {
		margin: 4,
		width: "31%",
	},
	reelImage: {
		width: "100%",
		height: 150,
	},
	reelOverlay: {
		position: "absolute",
		bottom: 8,
		left: 8,
		flexDirection: "row",
		alignItems: "center",
	},
	reelViews: {
		color: "white",
		fontSize: 12,
		marginLeft: 4,
	},
	icon: {
		borderWidth: 1,
		borderRadius: 50,
		borderColor: "#1F2738",
		padding: 7,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	slider: {
		flex: 1,
		height: 40,
	},
});

export default Search;
