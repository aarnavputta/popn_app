import { Text, StyleSheet, View, Pressable, Animated } from "react-native";
import { useContext, useRef } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { Link, Redirect } from "expo-router";
// import React from "react";
import { InstagramLogo } from "@/components/logos";

const API_URL = `http://localhost:3000/test/mssqlclubs`;

export default function TestScreen() {
    const auth = useContext(AuthContext);

    // if(!auth.authenticated) {
    //     return <Redirect href={"/(auth)"} />;
    // }

    return (
        <>
            <Text style={style.test}>test screen</Text>
            <InstagramLogo url={""} />
            <InstagramLogo url={"d"} />
            <AnimationTest />
            <Link style={style.test} href={"/(auth)"}>go back to login</Link>
        </>
    )
}

function AnimationTest() {
    const rounding = useRef(new Animated.Value(0)).current;

    const toCircle = () => {
        // console.log(`Starting Circle Animation, rounding: ${Object.keys(rounding)}`);
        rounding.setValue(0);
        Animated.timing(rounding, {
            toValue: 75,
            duration: 1000,
            useNativeDriver: true
        }).start();
        // console.log("Ended animation");
    };

    const toSquare = () => {
        rounding.setValue(75);
        Animated.timing(rounding, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start();
    };

    const sizeScaleValue = useRef(new Animated.Value(1)).current;
    
    const onHoverIn = () => {
        Animated.timing(sizeScaleValue, {
            toValue: 1.2,
            duration: 100,
            useNativeDriver: true
        }).start();
    };
    
    const onHoverOut = () => {
        Animated.timing(sizeScaleValue, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true
        }).start();
    };

    return (
        <View style={{ height: 300, padding: 10, borderColor: "red", borderWidth: 1 }}>
            <Text style={{ textAlign: "center", marginBottom: 20 }}>Animation Test Module</Text>
            <View style={{ alignItems: "center", marginBottom: 35 }}>
                <Animated.View style={[{ width: 150, height: 150, backgroundColor: "green"}, {borderRadius: rounding }]} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", gap: 25 }}>
                <Pressable
                    style={{ width: 80, height: 30, backgroundColor: "red", justifyContent: "center" }}
                    onPress={toCircle}
                >
                    <Text style={{ color: "blue", textAlign: "center" }}>To Circle</Text>
                </Pressable>
                <Pressable
                    style={{ width: 80, height: 30, borderColor: "yellow", borderWidth: 1 }}
                    // onPress={toSquare}
                    onPressIn={onHoverIn}
                    onPressOut={onHoverOut}
                    onPress={toSquare}
                >
                    <Animated.View style={{ height: 30, backgroundColor: "red", justifyContent: "center", transform: [{scale: sizeScaleValue}] }}>
                        <Text style={{ color: "blue", textAlign: "center" }}>To Square</Text>
                    </Animated.View>
                </Pressable>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    test: {
        margin: 40
    }
})
