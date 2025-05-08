import { useLocalSearchParams } from "expo-router";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet, FlatList, useColorScheme } from "react-native";
import { Link, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { getClubByID } from "@/data_temp/clubData";
import { FacebookLogo, LinkedinLogo, InstagramLogo, YoutubeLogo } from "@/components/logos";
import { APIContext } from "@/contexts/APIContext";

type DataItem = {
    title: string,
    description: string
}

const announcement_data = [
    {
        title: "Title 1",
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Ex ut primis faucibus praesent conubia a etiam at augue. Nostra vel per ad malesuada mattis rhoncus consectetur montes.`,
    },
    {
        title: "Title 2",
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Ex ut primis faucibus praesent conubia a etiam at augue. Nostra vel per ad malesuada mattis rhoncus consectetur montes.`,
    },
    {
        title: "Title 3",
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Ex ut primis faucibus praesent conubia a etiam at augue. Nostra vel per ad malesuada mattis rhoncus consectetur montes.`,
    },
    {
        title: "Title 4",
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Ex ut primis faucibus praesent conubia a etiam at augue. Nostra vel per ad malesuada mattis rhoncus consectetur montes.`,
    }
];



export default function ClubProfilePage() {
    const { id } = useLocalSearchParams();

    const render = ({ item }: {item: DataItem}) => {
        return (
            <AnnouncementItem data={item} />
        );
    };

    return (
        <LinearGradient
            colors={["#020202", "#1A1A1A"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={announcement_data}
                    renderItem={render}
                    ListHeaderComponent={<Header id={String(id)} />}
                    stickyHeaderIndices={[0]}
                />
            </SafeAreaView>
        </LinearGradient>
    )
}

// function Divider() {
//     return (
//         <View style={{ alignItems: "center", marginVertical: 10 }}>
//             <View style={{ width: 300, borderColor: "grey", borderWidth: 1 }} />
//         </View>
//     )
// }

type HeaderProps = {
    id: string
}

type ClubEntry = {
    name: string,
    description: string,
    link: string,
    facebook: string | null,
    linkedin: string | null,
    instagram: string | null,
    youtube: string | null,
    website: string
}

function Header({ id }: HeaderProps) {
    const [Data, setData] = useState({
        name: "none",
        description: "none",
        link: "none",
        facebook: "none",
        linkedin: "none",
        instagram: "none",
        youtube: "none",
        website: "none"
    });

    const API_URL = useContext(APIContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL + "/clubs/" + id);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <View style={styles.headerContainer}>
            <TitleBar />
            <View style={{ height: "10%" }} />
            <View style={{ height: "30%", flexDirection: "row" }}>
                <View style={{ width: "10%" }} />
                <Icon />
                <View style={{ width: "10%" }} />
                <Text style={textStyle.clubName}>{Data.name}</Text>
            </View>
            <View style={{ height: "15%", flexDirection: "row", alignItems: "center", borderColor: "yellow", borderWidth: 0 }}>
                <View style={{ width: "10%" }} />
                <View style={{ width: "40%", gap: "5"}}>
                    <Text style={{ color: "white" }}>Email: </Text>
                    <Text style={{ color: "white" }}>Phone: </Text>
                </View>
                <View style={{ width: "50%", borderColor: "white", borderWidth: 0, justifyContent: "center" }}>
                    <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>Social Media Links</Text>
                    <View style={{ height: "50%", flexDirection: "row", justifyContent: "center", gap: 10, borderWidth: 0, borderColor: "red" }}>
                        {/* <FacebookLogo url={""} />
                        <LinkedinLogo url={""} />
                        <InstagramLogo url={""} />
                        <YoutubeLogo url={""} /> */}
                        <SocialMediaLinks
                            facebook={Data.facebook}
                            linkedin={Data.linkedin}
                            instagram={Data.instagram}
                            youtube={Data.youtube}
                        />
                    </View>
                    {/* <InstagramLogo link={"df"} /> */}
                </View>
            </View>
            <View style={{ height: "5%" }} />
            <View style={{ height: "20%", paddingHorizontal: "2.5%", borderColor: "orange", borderWidth: 0 }}>
                <Text style={{ color: "white" }}>Description: {Data.description}</Text>
            </View>
        </View>
    );
}

type SocialMediaLinksProps = {
    facebook: string | null,
    linkedin: string | null,
    instagram: string | null,
    youtube: string | null
}

function SocialMediaLinks({ facebook, linkedin, instagram, youtube }: SocialMediaLinksProps) {
    return (
        <>
            {facebook && <FacebookLogo url={facebook}/>}
            {linkedin && <LinkedinLogo url={linkedin}/>}
            {instagram && <InstagramLogo url={instagram}/>}
            {youtube && <YoutubeLogo url={youtube}/>}
        </>
    )
}

function TitleBar() {
    const router = useRouter();

    return (
        <View style={{ height: "10%", borderColor: "white", borderWidth: 1 }}>
            <Text onPress={() => router.back()} style={styles.backButton}>back</Text>
        </View>
    )
}

type IconProps = {
    size?: number
}

function Icon({ size=75 }: IconProps) {
    return (
        <View style={{ width: size, height: size, borderRadius: "50%", justifyContent: "center", borderColor: "#605983", borderWidth: 1 }}>
            <Text style={{ textAlign: "center", color: "white", fontSize: 12 }}>
                Icon
            </Text>
        </View>
    );
}

type DataProp = {
    data: DataItem
}

function AnnouncementItem({data}: DataProp) {
    return (
        <View style={{ width: "100%", height: 200, justifyContent: "center", alignItems: "center", borderColor: "white", borderWidth: 0 }}>
            <View style={{ width: "90%", height: 150, backgroundColor: "#202020", borderColor: "#605983", borderWidth: 1, borderRadius: 10 }}>
                <Text style={textStyle.announcementTitle}>{data.title}</Text>
                <Text style={{height: "75%", color: "white", padding: "5%"}}>{data.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 300,
        backgroundColor: "#202020",
        borderColor: "#605983",
        borderWidth: 0,
        borderBottomWidth: 2
    },
    backButton: {
        color: "white", 
        fontSize: 15,
        width: 40,
        textAlign: "center",
        borderColor: "#605983",
        borderWidth: 1
    }
})

const textStyle = StyleSheet.create({
    clubName: {
        width: "50%",
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 25
    },
    announcementTitle: {
        height: "25%",
        color: "white",
        fontSize: 20,
        fontWeight: 600,
        textAlign: "center",
        padding: "2.5%"
    },
})
