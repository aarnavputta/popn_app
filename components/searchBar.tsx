import { Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function SearchBar() {
    const [search, setSearch] = useState("");
    return (
        <TextInput
            style={style.search}
            onChangeText={text => setSearch(text)}>
        </TextInput>
    )
}

const style = StyleSheet.create({
    search: {
        width: "90%",
        height: "40%",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#403963",
        backgroundColor: "#0E0E0E",
        padding: 15,
        fontSize: 20,
        color: "#403693",
        // fontFamily: ""
    }
})
