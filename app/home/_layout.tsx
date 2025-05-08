import React from "react";
import { Tabs } from "expo-router";

export default function HomeLayout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "black",
                    // borderColor: "red",
                    borderWidth: 0
                }
            })}
        >
            <Tabs.Screen name="clubs" options={{
                title: "Clubs",
                headerShown: false
            }} />
            <Tabs.Screen name="index" options={{
                title: "Events",
                headerShown: false
            }} />
            <Tabs.Screen name="profile" options={{
                title: "Profile",
                headerShown: false
            }} />
        </Tabs>
    )
}
