import { Text, StyleSheet, Pressable, View, TextInput, Image } from "react-native";
import { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [emailStatus, setEmailStatus] = useState("");
    const [password, setPassword] = useState("");
    const [passwordStatus, setPasswordStatus] = useState("");
    const router = useRouter();

    const nextPage = () => {
        const emailPattern = /^[a-z]{3}[0-9]{4}@psu.edu$/;
        const passwordPattern = /^[a-zA-Z0-9]{8,}$/
        console.log(`Email: ${email} Password: ${password}`);

        if(emailPattern.test(email) && passwordPattern.test(password)) {
            router.push("/(auth)/signup/createaccount");
        } else {
            setEmailStatus((emailPattern.test(email)) ? "" : "Enter A Valid Email Address");
            setPasswordStatus((passwordPattern.test(password)) ? "" : "Password must be alphanumeric and at least 8 characters long");
        }
    };

    return (
        <LinearGradient
            colors={["#020202", "#0A0A0A"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1 }}>
                <SafeAreaView>
                    <Header />
                    <View style={{ height: 300, alignItems: "center" }}>
                        <TextInput
                            style={styles.input}
                            placeholder={"PSU Email"}
                            placeholderTextColor={"#605983"}
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Text style={styles.statusText}>{emailStatus}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={"Password"}
                            placeholderTextColor={"#605983"}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                        />
                        <Text style={styles.statusText}>{passwordStatus}</Text>
                        <Pressable style={styles.button} onPress={nextPage}>
                            <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>Next</Text>
                        </Pressable>
                    </View>
                </SafeAreaView>
        </LinearGradient>
    )
}

function Header() {
    return (
        <>
            <Link href={"/"} style={{ color: "white" }}>Back</Link>
            <View style={{ alignItems: "center" }}>
                <Image source={require("@/assets/images/Popn_Logo.png")} style={{ width: "100%", height: 400, borderColor: "red", borderWidth: 0 }} />
            </View>
        </>
    );
}

type TextProp = {
    text: string
};

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
    )
}


const styles = StyleSheet.create({
    input: {
        width: "70%",
        height: 45,
        // borderColor: "#444",
        borderColor: "#605983",
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 15,
        marginBottom: 5,
        // backgroundColor: "#333",
        backgroundColor: "#0E0E0E",
        // color: "#666699",
        color: "white",
        fontSize: 15
    },
    button: {
        width: "70%",
        height: 45,
        backgroundColor: "#605983",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    statusText: {
        color: "red",
        width: "70%",
        marginBottom: 10
    }
});
