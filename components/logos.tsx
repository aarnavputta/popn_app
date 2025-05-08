import { View, Image, StyleSheet, Pressable, Linking, Alert } from "react-native";

type LogoPropType = {
    url: string
};

// const openLink = () => {
//     Alert.alert("Error", "unable to open link");
// };

function FacebookLogo({ url }: LogoPropType) { 
    const openLink = async () => {
        console.log("dff");
        console.log(url);
        const canOpen = await Linking.canOpenURL(url);
        console.log("able to open");
        if(canOpen) {
            try {
                await Linking.openURL(url);
            }
            catch(err) {
                Alert.alert("Error", "Error while opening link.");
            }
        } else {
            Alert.alert("Error", "Unable to open link.");
        }
    }
    return (
        <Pressable onPress={openLink}>
            <Image style={styles.logo} source={require('@/assets/images/social_media_logos/facebook-logo.png')} />
        </Pressable>
    );
}

function LinkedinLogo({ url }: LogoPropType) {
    const openLink = async () => {
        console.log("dff");
        console.log(url);
        const canOpen = await Linking.canOpenURL(url);
        console.log("able to open");
        if(canOpen) {
            try {
                await Linking.openURL(url);
            }
            catch(err) {
                Alert.alert("Error", "Error while opening link.");
            }
        } else {
            Alert.alert("Error", "Unable to open link.");
        }
    }

    return (
        <Pressable onPress={openLink}>
            <Image style={styles.logo} source={require('@/assets/images/social_media_logos/linkedin-logo.png')} />
        </Pressable>
    );
}

function InstagramLogo({ url }: LogoPropType) {
    const openLink = async () => {
        console.log("dff");
        console.log(url);
        const canOpen = await Linking.canOpenURL(url);
        console.log("able to open");
        if(canOpen) {
            try {
                await Linking.openURL(url);
            }
            catch(err) {
                Alert.alert("Error", "Error while opening link.");
            }
        } else {
            Alert.alert("Error", "Unable to open link.");
        }
    }

    return (
        <Pressable onPress={openLink}>
            <Image style={styles.logo} source={require('@/assets/images/social_media_logos/instagram-logo.png')} />
        </Pressable>
    );
}

function YoutubeLogo({ url }: LogoPropType) {
    const openLink = async () => {
        console.log("dff");
        console.log(url);
        const canOpen = await Linking.canOpenURL(url);
        console.log("able to open");
        if(canOpen) {
            try {
                await Linking.openURL(url);
            }
            catch(err) {
                Alert.alert("Error", "Error while opening link.");
            }
        } else {
            Alert.alert("Error", "Unable to open link.");
        }
    }

    return (
        <Pressable onPress={openLink}>
            <Image style={styles.logo} source={require('@/assets/images/social_media_logos/youtube-logo.png')} />
        </Pressable>
    );
}


const styles = StyleSheet.create({
    logo: {
        width: 25,
        height: 25,
        // backgroundColor: "black"
    }
});

export { FacebookLogo, LinkedinLogo, InstagramLogo, YoutubeLogo };
