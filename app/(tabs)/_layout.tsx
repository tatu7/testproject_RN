import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
const TabIcon = ({
	icon,
	color,
	name,
	focused,
	minIcon,
}: {
	icon: React.ReactNode;
	color: string;
	name: string;
	focused: boolean;
	minIcon: boolean;
}) => {
	return (
		<View style={[styles.tabs, focused && styles.activeTab]}>
			{icon}
			<Text
				style={{
					color: color,
					fontWeight: focused ? "600" : "400",
					fontSize: 12,
				}}></Text>
		</View>
	);
};

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarActiveTintColor: "#fff",
				tabBarInactiveTintColor: "#fff",
				tabBarStyle: {
					backgroundColor: "#000",
					height: 80,
					shadowColor: "#667085",
					shadowOffset: { width: 0, height: 16 },
					shadowOpacity: 0.25,
					shadowRadius: 50,
					width: "100%",
					paddingHorizontal: 10,
				},
			}}>
			<Tabs.Screen
				name='home'
				options={{
					title: "Qidiruv",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon
							name='Qidiruv'
							icon={<Ionicons name='home' size={32} color={color} />}
							color={color}
							focused={focused}
							minIcon={false}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='search'
				options={{
					title: "Saqlangan",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon
							minIcon={true}
							name='Saqlangan'
							icon={<Ionicons name='search' size={32} color={color} />}
							color={color}
							focused={focused}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='create'
				options={{
					title: "Xabarlar",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<View style={styles.createIconContainer}>
							<Ionicons name='add' size={40} color='#06B071' />
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name='reels'
				options={{
					title: "Reels",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon
							name='Reels'
							icon={<Entypo name='video' size={32} color={color} />}
							color={color}
							focused={focused}
							minIcon={false}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: "Profil",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon
							name='Profil'
							icon={<Ionicons name='person' size={32} color={color} />}
							color={color}
							focused={focused}
							minIcon={false}
						/>
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;

const styles = StyleSheet.create({
	tabs: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: 4,
		paddingTop: 20,
	},
	activeTab: {
		borderTopWidth: 2,
		borderTopColor: "#fff",
		paddingTop: 20,
	},
	createIconContainer: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 12,
	},
});
