import { View, Text, StyleSheet } from "react-native";
// gandu nikhil 
export default function Logo() {
    return (
        <View style={style.container}>
            <Text style={style.text}>POPN</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: "100%",
        height: "50%",
        alignItems: "center",
        paddingTop: 60,
        // borderWidth: 1,
        borderColor: "#D646"
    },
    text: {
        fontSize: 75,
        fontWeight: "bold",
        color: "white"
    }
});
// gandu n