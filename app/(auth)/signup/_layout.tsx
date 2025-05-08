import { Stack } from "expo-router";

export default function SignUpLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false
            }} />
            <Stack.Screen name="createaccount" options={{
                headerShown: false
            }} />
            <Stack.Screen name="recommended-clubs" options={{
                headerShown: false
            }} />
        </Stack>
    )
}