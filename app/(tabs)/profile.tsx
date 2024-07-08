import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export default function App() {
	return (
		<TailwindProvider>
			<ScrollView
				style={{
					flex: 1,
					backgroundColor: "white",
					paddingTop: 30,
				}}>
				<Text>Profile</Text>
			</ScrollView>
		</TailwindProvider>
	);
}
