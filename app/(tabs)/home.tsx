import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Home = () => {
	return (
		<ImageBackground
			source={{
				uri: "https://s3-alpha-sig.figma.com/img/086e/7546/3c651f7f3f278e1bb1ebde628666c259?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m-y1b~FGibAUm25pe52KBhbftUFWzmNR~95cjyE09x~iZgSuDyGi54IFjrNnbxvEIoUP~DXyySZ7PicJj9RJz5dHdHK00svWeTYeCW2IhadxSxVxwBOB5Gms-owz~U0kUqK8w0Gitubj0koCfwe6HUY2uPlUa1YKidGKWY4YLWeWrZSGNG5XTmyMgsTbd3umQHO3BwSKSJwFg6HeA8JFxm9d2-KLWnb8V6NEBboNJ5oWiptdYVMetd4dEAryeyTeAU~wHTrCBlsLrb0lUq05eeq-OwvQ68TXjLUj7MwWc3DJDJkAzgsJ623nvxRdc8VUsVaOAfo-fWZqSU1gWUTQJQ__",
			}}
			style={styles.backgroundImage}>
			<View style={styles.overlay} />
			<View style={styles.topBar}>
				<Ionicons
					name='chevron-back'
					size={24}
					color='white'
					style={styles.icon}
				/>
				<Text style={styles.title}>Following</Text>
				<Ionicons
					name='camera-outline'
					size={24}
					color='white'
					style={styles.icon}
				/>
			</View>
			<View style={styles.bottomBar}>
				<View style={styles.iconContainer}>
					<Ionicons
						name='heart-outline'
						size={24}
						color='white'
						style={styles.icon}
					/>
					<Text style={styles.iconText}>3.2k</Text>
				</View>
				<View style={styles.iconContainer}>
					<Ionicons
						name='chatbubble-outline'
						size={24}
						color='white'
						style={styles.icon}
					/>
					<Text style={styles.iconText}>3.2k</Text>
				</View>
				<View style={styles.iconContainer}>
					<Ionicons
						name='paper-plane-outline'
						size={24}
						color='white'
						style={styles.icon}
					/>
					<Text style={styles.iconText}>3.2k</Text>
				</View>
				<View style={styles.iconContainer}>
					<Ionicons
						name='trash-outline'
						size={24}
						color='white'
						style={styles.icon}
					/>
					<Text style={styles.iconText}>3.2k</Text>
				</View>
				<View style={styles.iconContainer}>
					<Ionicons
						name='bookmark'
						size={24}
						color='white'
						style={styles.icon}
					/>
				</View>
				<View style={styles.iconContainer}>
					<Feather
						name='more-vertical'
						size={24}
						color='white'
						style={styles.icon}
					/>
				</View>
			</View>
			<View style={styles.bottomLeftContent}>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-around",
						width: "70%",
					}}>
					<Image
						source={{
							uri: "https://s3-alpha-sig.figma.com/img/bdc6/db2a/3a906b3de8eaa53e14582edf5c918b5d?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U7P8CfaZR8VN~AB1t4yamhll4GWaFTFOGHWe5KuCLxDNe4~p9UhUbNtg9VA8aaFLDKPmwuByzP7CpTyF1KFHwPwChykfMqAhFl6iJGCErm9vbcCeYixeYDT1QE1JWrVlT5y4YfuzY2H1hH9V0dHwAzKAc8hMALmYPIoMNsqxZICi6T0PjW0ATcq~eeOYXaxtY9S30thVMs3WHidear3kaHFhkU-MO7VCCQVDbjVzVvy~PWSw-QZcZiqNvkC-lm0DLJlzBtuVkjIlOgoW2JTZqVMcaNUau2ybiuv2uIAR~tRoO18JRvqWgC55EfDQZ1lvwk1mAkeoSHqBPHP954d7kQ__",
						}}
						style={styles.profileImage}
					/>
					<View style={styles.userInfo}>
						<View style={styles.userRow}>
							<Text style={styles.username}>Sarah_tom</Text>
							<Ionicons name='checkmark-circle' size={16} color='green' />
						</View>
						<View style={styles.userRow}>
							<Ionicons name='time-outline' size={16} color='white' />
							<Text style={styles.timeText}>4 hours ago</Text>
						</View>
					</View>
					<View style={styles.followButton}>
						<Text style={styles.followButtonText}>Follow</Text>
					</View>
				</View>
				<View>
					<Text style={styles.description}>
						Sign up to our newsletter to sta...
					</Text>
					<View style={styles.musicTag}>
						<Ionicons name='musical-notes' size={16} color='white' />
						<Text style={styles.musicText}>ATom music</Text>
					</View>
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
	icon: {
		borderWidth: 1,
		borderRadius: 50,
		borderColor: "#f4f4f4",
		padding: 8,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
	topBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 20,
		marginTop: 30,
	},
	title: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
	bottomBar: {
		position: "absolute",
		bottom: 40,
		right: 10,
		flexDirection: "column",
		gap: 30,
		justifyContent: "space-between",
		paddingHorizontal: 16,
	},
	iconContainer: {
		alignItems: "center",
	},
	iconText: {
		color: "white",
		fontSize: 12,
		marginTop: 4,
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.4)",
	},
	bottomLeftContent: {
		position: "absolute",
		bottom: 50,
		left: 16,
		flexDirection: "column",
		alignItems: "flex-start",
		width: "100%",
	},
	profileImage: {
		width: 50,
		height: 50,
		borderRadius: 25,
		borderWidth: 2,
		borderColor: "white",
	},
	userInfo: {
		marginLeft: 10,
	},
	userRow: {
		flexDirection: "row",
		alignItems: "center",
	},
	username: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
		marginRight: 5,
	},
	timeText: {
		color: "white",
		fontSize: 12,
		marginLeft: 5,
	},
	description: {
		color: "white",
		fontSize: 14,
		marginTop: 5,
	},
	musicTag: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "rgba(255, 255, 255, 0.3)",
		borderRadius: 10,
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginTop: 5,
	},
	musicText: {
		color: "white",
		fontSize: 12,
		marginLeft: 5,
	},
	followButton: {
		marginLeft: "auto",
		borderRadius: 20,
		borderColor: "#fff",
		borderWidth: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: 40,
		width: 100,
	},
	followButtonText: {
		color: "white",
		fontSize: 14,
		fontWeight: "bold",
	},
});

export default Home;
