import React from "react";
import { APIContext } from "@/contexts/APIContext";
import { Link, useRouter } from "expo-router";
import { useContext, useState } from "react";
import { Text, View, Image, Pressable, StyleSheet, TextInput } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateAccountPage() {
    const [paragraph, setParagraph] = useState("");
    const backendURL = useContext(APIContext);
    const router = useRouter();

    const queryClubsSearch = async () => {
        console.log("trying to query backend");
        try {
            const response = await fetch(backendURL + "/recommend-clubs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userText: paragraph,
                    topN: 5
                })
            });
            console.log(response);
            console.log(await response.json());
        } catch(err) {
            console.log("error in retrieving from backend");
        }
    };

    const testThing = () => {
        console.log("fuckin work bitch");
    }

    return (
        <LinearGradient
            colors={["#020202", "#0A0A0A"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1 }}
        >
            <SafeAreaView>
                <Header />
                {/* <InterestPicker /> */}
                <View style={{ alignItems: "center", marginTop: 100 }}>
                    <Text style={styles.instructionsText}>Tell Our AI Model Your Interests and Some Information About You</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter it here"
                        placeholderTextColor={"#605983"}
                        multiline={true}
                        value={paragraph}
                        onChangeText={setParagraph}
                    />
                    <Pressable style={styles.button} onPress={queryClubsSearch}>
                        <Text style={{ color: "white" }}>test api search</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

function InterestPicker() {
    const interests = [
        "Technology & Engineering", "Art & Design", "Music & Performance",
        "Fitness & Physical Activity", "Community Service",
        "Entrepreneurship & Startups", "Politics & Activism",
        "Gaming & Pop Culture", "Spirituality & Religion",
        "Writing & Content Creation", "Health & Wellness",
        "Social Impact & Fundraising", "Academic Excellence",
        "Mathematics & Science", "Environmental Sustainability",
        "Student Government", "Media & Communications",
        "Culture & Identity", "Military & Public Service",
        "Housing & Campus Life", "Fraternities & Sororities"
    ];

    return (
        <View style={{borderColor: "white", borderWidth: 1, height: 300, alignItems: "center" }}>
            <Text style={styles.instructionsText}>Please Select at least 3 Interests</Text>
            <View style={{ flexWrap: "wrap", flexDirection: "row", justifyContent: "center", borderColor: "yellow", borderWidth: 1 }}>
                {interests.map((interest) => (
                    <Text style={{ color: "white", borderColor: "red", borderWidth: 1, width: 125, textAlign: "center" }}>{interest}</Text>
                ))}
            </View>
        </View>
    )
}

function Header() {
    const router = useRouter();

    return (
        <>
            <Pressable onPress={() => router.back()}>
                <Text style={{ color: "white" }}>Back</Text>
            </Pressable>
            <View style={{ alignItems: "center", borderColor: "yellow", borderWidth: 0 }}>
                <Image source={require("@/assets/images/Popn_Logo.png")} style={{ width: "100%", height: 100, borderColor: "red", borderWidth: 0 }} />
            </View>
        </>
    );
}

type TextProp = {
    text: string
}

function ToggleButton({ text }: TextProp) {
    const [toggled, setToggled] = useState(false);

    return (
        <Pressable onPress={() => setToggled(!toggled)} style={{
            width: 100,
            height: 50,
            backgroundColor: "#1A1A1A",
            // borderColor: "white",
            borderColor: toggled ? "white" : "#605983",
            // borderWidth: toggled ? 1 : 0,
            borderWidth: 1,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 20
        }}>
            <Text style={{ color: "white" }}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    instructionsText: {
        color: "white",
        width: "70%",
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 10
    },
        // color: "white",
        // fontSize: 20,
        // fontWeight: 600,
        // textAlign: "center",
        // marginTop: 20
    input: {
        width: "70%",
        height: 200,
        borderColor: "#605983",
        borderWidth: 1,
        borderRadius: 8,
        padding: 15,
        marginBottom: 5,
        backgroundColor: "#0E0E0E",
        color: "white",
        fontSize: 15,
    },
    button: {
        width: "70%",
        height: 45,
        backgroundColor: "#605983",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
});
