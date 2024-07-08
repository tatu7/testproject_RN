import React from "react";
import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	Image,
	TextInput,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Create = () => {
	return (
		<ImageBackground
			source={{
				uri: "https://s3-alpha-sig.figma.com/img/086e/7546/3c651f7f3f278e1bb1ebde628666c259?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m-y1b~FGibAUm25pe52KBhbftUFWzmNR~95cjyE09x~iZgSuDyGi54IFjrNnbxvEIoUP~DXyySZ7PicJj9RJz5dHdHK00svWeTYeCW2IhadxSxVxwBOB5Gms-owz~U0kUqK8w0Gitubj0koCfwe6HUY2uPlUa1YKidGKWY4YLWeWrZSGNG5XTmyMgsTbd3umQHO3BwSKSJwFg6HeA8JFxm9d2-KLWnb8V6NEBboNJ5oWiptdYVMetd4dEAryeyTeAU~wHTrCBlsLrb0lUq05eeq-OwvQ68TXjLUj7MwWc3DJDJkAzgsJ623nvxRdc8VUsVaOAfo-fWZqSU1gWUTQJQ__",
			}}
			style={styles.backgroundImage}>
			<View style={styles.overlay} />
			<View style={styles.topBar}>
				<View style={styles.userInfo}>
					<Image
						source={{
							uri: "https://s3-alpha-sig.figma.com/img/bdc6/db2a/3a906b3de8eaa53e14582edf5c918b5d?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U7P8CfaZR8VN~AB1t4yamhll4GWaFTFOGHWe5KuCLxDNe4~p9UhUbNtg9VA8aaFLDKPmwuByzP7CpTyF1KFHwPwChykfMqAhFl6iJGCErm9vbcCeYixeYDT1QE1JWrVlT5y4YfuzY2H1hH9V0dHwAzKAc8hMALmYPIoMNsqxZICi6T0PjW0ATcq~eeOYXaxtY9S30thVMs3WHidear3kaHFhkU-MO7VCCQVDbjVzVvy~PWSw-QZcZiqNvkC-lm0DLJlzBtuVkjIlOgoW2JTZqVMcaNUau2ybiuv2uIAR~tRoO18JRvqWgC55EfDQZ1lvwk1mAkeoSHqBPHP954d7kQ__",
						}}
						style={styles.profileImage}
					/>
					<Text style={styles.username}>Sarah_tom</Text>
					<Ionicons
						name='checkmark-circle'
						size={16}
						color='white'
						style={{ marginTop: 5, marginLeft: 2 }}
					/>
				</View>
				<View style={styles.topIcons}>
					<View style={styles.iconContainer}>
						<Ionicons name='eye-outline' size={16} color='white' />
						<Text style={styles.iconText}>1.5k</Text>
					</View>
					<View style={styles.iconContainer2}>
						<Text style={styles.liveText}>LIVE</Text>
					</View>
					<Ionicons name='close-outline' size={24} color='white' />
				</View>
			</View>
			<Ionicons
				name='ellipsis-vertical'
				size={24}
				color='white'
				style={{
					position: "absolute",
					bottom: 110,
					right: 20,
					borderWidth: 1,
					borderRadius: 50,
					borderColor: "#f4f4f4",
					padding: 8,
				}}
			/>
			<View style={styles.bottomBar}>
				<TextInput
					style={styles.commentInput}
					placeholder='Comment'
					placeholderTextColor='white'
				/>
				<View style={styles.bottomIcons}>
					<Ionicons
						name='heart-outline'
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
						name='paper-plane-outline'
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
		backgroundColor: "rgba(0, 0, 0, 0.3)",
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
	username: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
		marginLeft: 8,
	},
	topIcons: {
		flexDirection: "row",
		alignItems: "center",
	},
	iconContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 16,
		backgroundColor: "#B8BABE",
		borderRadius: 20,
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	iconContainer2: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 16,
	},
	iconText: {
		color: "white",
		fontSize: 14,
		marginLeft: 4,
	},
	liveText: {
		color: "white",
		fontSize: 14,
		backgroundColor: "red",
		paddingHorizontal: 10,
		paddingVertical: 4,
		borderRadius: 10,
	},
	bottomBar: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "rgba(0, 0, 0, 0.8)",
		padding: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	commentInput: {
		flex: 1,
		color: "white",
		backgroundColor: "rgba(255, 255, 255, 0.2)",
		borderRadius: 20,
		paddingHorizontal: 16,
		paddingVertical: 8,
		marginRight: 16,
	},
	bottomIcons: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
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
});

export default Create;
