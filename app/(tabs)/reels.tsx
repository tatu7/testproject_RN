import React from "react";
import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	Image,
	TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

const Reels = () => {
	return (
		<ImageBackground
			source={{
				uri: "https://s3-alpha-sig.figma.com/img/78e3/2b87/1a3e5ea3cf1d2980ff751d5890083fb4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X1Aa3iGzMv3z3W4mFBtXqYgjIrwYExL1DxqFyPXPafFkJcyaND3NWAiTyJlIvH3ylC2pv6zEs~08TFEt-sCy-mbsdoFdLzZh2HFlobdTLTnJeWGayY6CBB1vqI3f6LAQRioFVvK8iZa5CBnRC0cCNUDSBulk4tbdEpL2sE2FNyivlOQYqX71nG6Q6U4z6xSNzb9JaP4QL-hhf6CH0RgjTwjRlnEvHssZtzF3YdqhPx69Nb1H5kfB8D7NSWdhgcu3T9tYyfCF4xO~CsAQdqcypoRBEiCp-lDXR~JNnXvVHv-TLE~l0MwPd~HERYexGoHSrGai5ZhuWHUhH7H~8ylDyA__",
			}}
			style={styles.backgroundImage}>
			<View style={styles.overlay} />
			<View style={styles.topBar}>
				<View style={styles.userInfo}>
					<Image
						source={{
							uri: "https://s3-alpha-sig.figma.com/img/086e/7546/3c651f7f3f278e1bb1ebde628666c259?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m-y1b~FGibAUm25pe52KBhbftUFWzmNR~95cjyE09x~iZgSuDyGi54IFjrNnbxvEIoUP~DXyySZ7PicJj9RJz5dHdHK00svWeTYeCW2IhadxSxVxwBOB5Gms-owz~U0kUqK8w0Gitubj0koCfwe6HUY2uPlUa1YKidGKWY4YLWeWrZSGNG5XTmyMgsTbd3umQHO3BwSKSJwFg6HeA8JFxm9d2-KLWnb8V6NEBboNJ5oWiptdYVMetd4dEAryeyTeAU~wHTrCBlsLrb0lUq05eeq-OwvQ68TXjLUj7MwWc3DJDJkAzgsJ623nvxRdc8VUsVaOAfo-fWZqSU1gWUTQJQ__",
						}}
						style={styles.profileImage}
					/>
					<View style={styles.userDetails}>
						<Text style={styles.username}>Sarah_tom</Text>
						<Text style={styles.timeText}>20m ago</Text>
					</View>
				</View>
				<View style={styles.topIcons}>
					<View style={styles.iconContainer}>
						<Ionicons name='eye-outline' size={16} color='white' />
						<Text style={styles.iconText}>24 views</Text>
					</View>
					<Ionicons name='close-outline' size={24} color='white' />
				</View>
			</View>
			<View style={styles.bottomBar}>
				<View style={styles.sliderContainer}>
					<View
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
							flexDirection: "row",
						}}>
						<Text style={styles.timeText}>0:20</Text>
						<Text style={styles.timeText}>2:20</Text>
					</View>
					<Slider
						style={styles.slider}
						minimumValue={0}
						maximumValue={1}
						minimumTrackTintColor='#06B071'
						maximumTrackTintColor='#3E3E3E'
						thumbTintColor='#06B071'
					/>
				</View>
				<View style={styles.bottomIcons}>
					<Ionicons
						name='heart-outline'
						size={24}
						color='white'
						style={styles.icon}
					/>
					<Ionicons
						name='chatbubble-outline'
						size={24}
						color='white'
						style={styles.icon}
					/>
					<Ionicons
						name='paper-plane-outline'
						size={24}
						color='white'
						style={styles.icon}
					/>
					<Ionicons
						name='trash-outline'
						size={24}
						color='white'
						style={styles.icon}
					/>
					<Ionicons
						name='ellipsis-horizontal'
						size={24}
						color='white'
						style={styles.icon}
					/>
				</View>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		width: "100%",
		height: "100%",
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.3)", // Yarim shaffof qora rang
	},
	topBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 16,
		marginTop: 30,
	},
	userInfo: {
		flexDirection: "row",
		alignItems: "center",
	},
	profileImage: {
		width: 40,
		height: 40,
		borderRadius: 20,
		borderWidth: 2,
		borderColor: "white",
	},
	userDetails: {
		marginLeft: 8,
	},
	username: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	timeText: {
		color: "white",
		fontSize: 12,
	},
	topIcons: {
		flexDirection: "row",
		alignItems: "center",
	},
	iconContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 16,
	},
	iconText: {
		color: "white",
		fontSize: 14,
		marginLeft: 4,
	},
	bottomBar: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		padding: 16,
	},
	sliderContainer: {
		flexDirection: "column",
		alignItems: "center",
		width: "100%",
	},
	slider: {
		flex: 1,
		height: 40,
		marginHorizontal: 8,
		width: "100%",
	},
	bottomIcons: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: 16,
	},
	icon: {
		borderWidth: 1,
		borderRadius: 50,
		borderColor: "#1F2738",
		padding: 7,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
});

export default Reels;
