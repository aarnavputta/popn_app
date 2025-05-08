import { Pressable, Text, StyleSheet } from "react-native";

interface Props {
    text: string,
    onClick: () => void
}

export default function SubmitButton(props: Props) {
    return (
        <Pressable onPress={props.onClick} style={style.button}>
            <Text style={style.text}>{props.text}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    button: {
        width: "70%",
        height: 45,
        backgroundColor: "#663399",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    text: {
        fontSize: 18,
        color: "white"
    }
})
