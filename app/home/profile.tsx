import { Text, View, StyleSheet, ScrollView, Pressable, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
    return (
        <LinearGradient
            colors={["#020202", "#0A0A0A"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1 }}>
                {/* <Text style={{ margin: 40, color: "white" }}>profile</Text> */}
                <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
                    <View style={{ height: "15%", justifyContent: "center"}}>
                        {/* <Text style={style.title}>POPN</Text> */}
                        <Image
                            source={require("@/assets/images/Popn_Logo.png")}
                            style={{ width: 100, height: "100%" }}
                        />
                    </View>
                    <View style={{ width: "100%", height: "30%", flexDirection: "row" }}>
                        <View style={{ width: "50%", height: "100%", justifyContent: "center" }}>
                            <ProfileIcon />
                        </View>
                        <View style={{ width: "50%", justifyContent: "center", alignItems: "center", gap: "5%" }}>
                            <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>Username</Text>
                            <Text style={{ fontSize: 15, color: "white" }}>@chunky-monkey69</Text>
                            <EditProfileButton />
                        </View>
                    </View>
                    <Events />
                </SafeAreaView>
        </LinearGradient>
    )
}

function ProfileIcon() {
    return (
        <View style={style.icon}>
            <Text style={{ color: "white" }}>icon</Text>
        </View>
    )
}

function EditProfileButton() {
    return (
        <Pressable style={style.button} onPress={() => null}>
            <Text style={{ fontSize: 15, color: "white", textAlign: "center" }}>Edit Profile</Text>
        </Pressable>
    )
}

type EventProp = {
    name: string
}

function Events() {
    return (
        <View style={{ width: "100%", height: "35%", borderColor: "red", borderWidth: 0 }}>
            <Text style={{ fontSize: 15, color: "white", fontWeight: 600 }}>Events</Text>
            <View style={{ width: "25%", height: 0, borderColor: "#909090", borderWidth: 0.75, marginVertical: 20 }} />
            <ScrollView
                contentContainerStyle={{ alignItems: "center" }}
                horizontal={true}
            >
                    <EventCard name="Event 1" />
                    <EventCard name="Event 2" />
                    <EventCard name="Event 3" />
                    <EventCard name="Event 4" />
                    <EventCard name="Event 5" />
            </ScrollView>
        </View>
    )
}

function EventCard({ name }: EventProp) {
    return (
        <View style={style.card}>
            <Text style={{ borderColor: "white", borderWidth: 0, color: "white" }}>{name}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        color: "#e4c4e5",
        fontSize: 40,
        fontWeight: "bold",
        // borderColor: "white",
        // borderWidth: 1
    },
    icon: {
        height: 150,
        width: 150,
        borderRadius: 75,
        borderColor: "#403963",
        borderWidth: 1,
        marginLeft: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0E0E0E"
    },
    card: {
        width: 125,
        height: "100%",
        borderColor: "#403963",
        borderWidth: 1,
        borderRadius: "10%",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 25
    },
    button: {
        width: "100%",
        height: 30,
        borderColor: "#403963",
        borderWidth: 1,
        marginTop: 20,
        justifyContent: "center",
        backgroundColor: "#101010"
    }
})
