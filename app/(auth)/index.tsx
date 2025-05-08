import { View, Text, StyleSheet, TextInput, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useContext } from "react";
import { AuthContext, responseType } from "@/contexts/AuthContext";
import { Link, Redirect, useRouter } from "expo-router";
import SubmitButton from "@/components/submitButton";
import LinearGradient from "react-native-linear-gradient";
import React from "react";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const auth = useContext(AuthContext);
    const router = useRouter();

    const goToTest = () => {
        router.navigate("/(test)");
    }

    if(auth && auth.authenticated) {
        return <Redirect href="/home" />;
    }

    return (
        <LinearGradient
            colors={["#020202", "#0A0A0A"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1 }}>
                <SafeAreaView style={styles.bg}>
                    <Logo />
                    <View style={styles.container}>
                        <TextInput placeholder="Username" style={styles.input} onChangeText={text => setUsername(text)} placeholderTextColor={"#605983"} />
                        {/* <TextInput placeholder="Password" style={style.input} onChangeText={text => setPassword(text)} placeholderTextColor={"#605983"} /> */}

                        <PasswordInput setPassword={setPassword} />
                        
                        
                        <Text style={styles.statusBar}>{status}</Text>
                        <SubmitButton text="Login" onClick={async () => {
                            if(auth) {
                                const res: responseType = await auth.logIn(username, password);
                                console.log(res);
                                if(res.approved) {
                                    auth.setAuthenticated(true);
                                } else {
                                    setStatus(res.message);
                                }
                            }
                            
                        }}/>
                        <Link href={"/(auth)/signup"} style={styles.signUp}>
                            Sign Up
                        </Link>
                        {/* <Link href={"/(test)"} style={{ backgroundColor: "white" }}>
                            go test
                        </Link> */}
                    </View>
                </SafeAreaView>                
        </LinearGradient>
        
    )
}

type PasswordInputProps = {
    setPassword: (value: string) => void
}

function PasswordInput({ setPassword}: PasswordInputProps) {
    const [hidden, setHidden] = useState(true);
    return (
        <View style={styles.passContainer}>
            <TextInput
                placeholder="Password"
                style={styles.passInput}
                onChangeText={text => setPassword(text)}
                placeholderTextColor="#605983"
                // caretHidden={true}
                secureTextEntry={hidden}
            />
            <Pressable
                style={{ width: "20%", height: "100%", justifyContent: "center" }}
                onPress={() => setHidden(!hidden)}
            >
                <Text style={{ color: "white", textAlign: "center" }}>{hidden ? "Show" : "Hide"}</Text>
            </Pressable>
        </View>
    );
}

function Logo() {
    return (
        <View style={{ alignItems: "center" }}>
            <Image
                source={require("@/assets/images/Popn_Logo.png")}
                style={{
                    width: "100%",
                    height: 400
                }}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    bg: {
        flex: 1,
        // backgroundColor: "#352F44"
    },
    container: {
        width: "100%",
        height: "50%",
        alignItems: "center"
    },
    input: {
        width: "70%",
        height: 45,
        // borderColor: "#444",
        borderColor: "#605983",
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 15,
        marginBottom: 25,
        // backgroundColor: "#333",
        backgroundColor: "#0E0E0E",
        // color: "#666699",
        color: "white",
        fontSize: 15
    },
    signUp: {
        width: "70%",
        height: 45,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#605983",
        marginTop: 10,
        fontSize: 18,
        color: "white",
        // alignItems: "center",
        // justifyContent: "center"
        textAlign: "center",
        paddingTop: "2.5%"
        // justifyContent: "center"
    },
    statusBar: {
        width: "70%",
        height: "auto",
        color: "red",
        fontSize: 15
    },
    passContainer: {
        height: 45,
        width: "70%",
        justifyContent: "center",
        borderColor: "#605983",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 25,
        backgroundColor: "#0E0E0E",
        flexDirection: "row"
    },
    passInput: {
        width: "80%",
        height: "100%",
        // borderColor: "#444",
        // borderWidth: 1,
        paddingLeft: 15,
        // backgroundColor: "#333",
        // color: "#666699",
        color: "white",
        fontSize: 15,
        // alignItems: "center",
    },
});

const textStyles = StyleSheet.create({
    toggleText: {
        
    }
});
