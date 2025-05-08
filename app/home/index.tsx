import { Text, StyleSheet, View, Pressable, FlatList, TextInput, ScrollView, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import { Data } from "@/data_temp/eventData";
import { useState } from "react";
import { BlurView } from "expo-blur";
// import logoImage from "../../images/Popn_Logo";
// import icon from "@/assets/images/icon"

type EventDataType = {
    name: string,
    description: string,
    city: string,
    state: string,
    date: Date,
    price: number
}

export default function EventsPage() {
    const render = ({item}: {item: EventDataType}) => {
        // return <ClubEntry item={item} />
        return <EventCard event={item} />;
    }

    return (
        <LinearGradient
            // colors={["#020202", "#0E0E0E"]}
            colors={["#020202", "#1F1F1F"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}>
                <SafeAreaView>
                    {/* <View style={style.title}>
                        <Text>dfsf</Text>
                    </View> 
                    <Text style={style.text}>Events Page</Text>
                    <View style={style.container} /> */}
                    <FlatList 
                        data={Data}
                        renderItem={render}
                        // contentContainerStyle={}
                        ListHeaderComponent={<Header />}
                        stickyHeaderIndices={[0]}
                        // contentContainerStyle={{ gap: "5%" }}
                        // StickyHeaderComponent={Header}
                    />
                </SafeAreaView>
        </LinearGradient>
    );
}

function Header() {
    // return (
    //     <View style={style.container}>
    //         <Text style={style.title}>POPN</Text>
    //         <SearchBar />
    //         <OptionBar />
    //     </View>
    // )
    return (
        <BlurView intensity={20} tint={"regular"} style={style.header}>
            <View style={{ width: "100%", height: "100%", alignItems: "center",
                backgroundColor: "#0E0E0E", opacity: 0.8
            }}>
                {/* <Text style={style.title}>POPN</Text> */}
                <Image
                    source={require("@/assets/images/Popn_Logo.png")}
                    style={{
                        width: 100,
                        height: 30,
                        margin: 5
                    }} />
                <SearchBar />
                <OptionBar />
            </View>
        </BlurView>
    )
}

function SearchBar() {
    const [search, setSearch] = useState("");
    return (
        <TextInput
            style={style.search}
            onChangeText={text => setSearch(text)}
            placeholder={"Search"}
            placeholderTextColor={"#605983"}
        />
    )
}

function OptionBar() {
    return (
        <ScrollView contentContainerStyle={{ alignItems: "center"}} horizontal={true}>
            <OptionToggleButton text="Popular"/>
            <OptionToggleButton text="Trending" /> 
            <OptionToggleButton text="Music" />
            <OptionToggleButton text="Academic" />
            <OptionToggleButton text="Sports" />
        </ScrollView>
    );
}

type TextProp = {
    text: string
}

function OptionToggleButton({ text }: TextProp) {
    const [toggled, setToggled] = useState(false);

    const toggleButton = () => {
        setToggled(!toggled);
        // console.error("button pressed")
    }

    return (
        <Pressable onPress={() => toggleButton()} style={{
            width: 100,
            height: "55%",
            backgroundColor: "#1A1A1A",
            borderColor: "white",
            borderWidth: toggled ? 1 : 0,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 20
        }}>
            <Text style={{ color: "white" }}>{text}</Text>
        </Pressable>
    )
}

type EventCardProps = {
    event: EventDataType
}

function EventCard({ event }: EventCardProps) {
    const monthMap: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const hour: number = Number(event.date.toTimeString().slice(0, 2));
    const min: string =  event.date.toTimeString().slice(3, 5);

    return (
        // <View style={{ height: 200, borderColor: "red", borderWidth: 0, alignItems: "center", justifyContent: "center" }}>
        //     <View style={{ width: "70%", height: "90%", borderColor: "#605983", borderWidth: 1, borderRadius: 25 }}>
        //         <Text style={{ color: "white", textAlign: "center", fontSize: 20, fontWeight: "bold", marginVertical: 15 }}>{item.name}</Text>
        //         <Text style={{ color: "white", marginHorizontal: 15 }}>{item.description}</Text>
        //     </View>
        // </View>
        <View style={{ height: 300, justifyContent: "center", alignItems: "center" }}>
            <View style={{ width: "85%", height: "90%" }}>
                <ImageBackground
                    source={require("@/assets/images/backgroundIMG.png")}
                    style={{ flex: 1, borderRadius: 25, overflow: "hidden", borderColor: "purple", borderWidth: 0.5 }}
                    imageStyle={{ borderRadius: 25 }}>
                        <View style={{ height: "70%", alignItems: "flex-end" }}>
                            <View style={{ width: 60, height: 60, margin: 15, overflow: "hidden", borderRadius: 30, borderColor: "white", borderWidth: 0.5 }}>
                                <BlurView
                                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                                    intensity={20}>
                                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
                                        {event.date.getDate()}
                                    </Text>
                                    <Text style={{ color: "white" }}>
                                        {monthMap[event.date.getMonth()]}
                                    </Text>
                                </BlurView>
                            </View>
                        </View>
                        <BlurView 
                            style={{
                                height: "30%",
                                flexDirection: "row"
                            }}
                            intensity={20}>
                                <View style={{ width: "60%" }}>
                                    <View style={{ height: "50%", paddingTop: 15 }}>
                                        <Text style={{ color: "white", fontSize: 20, fontWeight: 500, textAlign: "center" }}>
                                            {event.name}
                                        </Text>
                                    </View>
                                    <View style={{ height: "50%", paddingTop: 5 }}>
                                        <Text style={{ color: "white", fontSize: 15, textAlign: "center" }}>
                                            {event.city} - {hour == 0 ? "12" : (hour > 12 ? hour - 12 : hour)}:{min } {hour < 12 ? "AM" : "PM"}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ width: "40%", justifyContent: "center", alignItems: "center" }}>
                                    <View style={{ width: "80%", height: "45%", backgroundColor: "white", borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontWeight: "bold" }}>
                                            {event.price === 0 ? "Free" : "$" + event.price.toFixed(2)}
                                        </Text>
                                    </View>
                                </View>
                        </BlurView>
                </ImageBackground>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    // bg: {
    //     flex: 1,
    //     backgroundColor: "#341539",
    //     alignItems: "center"
    // },
    // title: {
    //     width: "90%",
    //     borderWidth: 1,
    //     borderRadius: 10,
    //     color: "white",
    //     fontSize: 30
    // },
    // text: {
    //     width: "70%",
    //     height: 50,
    //     color: "#EBD3F8"
    // },
    // container: {
    //     width: "70%",
    //     height: 50,
    //     borderColor: "#CBCBCB",
    //     borderWidth: 1
    // }
    header: {
        flex: 1,
        // width: "100%",
        // height: "25%",
        height: 150,
        // borderWidth: 1,
        // borderColor: "red",
        // justifyContent: "center",
        // alignItems: "center",
        // textAlignVertical: "center",
        // backgroundColor: "#020200"
        // backgroundColor: "#0E0E0E",
        // position: "absolute",
        zIndex: 1
    },
    title: {
        // flex: 1,
        height: "25%",
        color: "#E4C4E5",
        fontSize: 20,
        fontWeight: "bold",
        textAlignVertical: "center",
        borderColor: "red",
        // borderWidth: 1,
        paddingTop: "2%"
    },
    search: {
        // flex: 1,
        width: "90%",
        height: "30%",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#605983",
        // borderColor: "white",
        // backgroundColor: "#0E0E0E",
        paddingLeft: 25,
        fontSize: 15,
        color: "white",
    },
})
