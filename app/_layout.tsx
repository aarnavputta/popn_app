import { Redirect, Stack } from "expo-router";
import { AuthContext, responseType } from "@/contexts/AuthContext";
import { APIContext } from "@/contexts/APIContext";
import { useState } from "react";
import { AppRegistry } from "react-native";
import React from "react";
// import users from "@/backend/users.json"

// const users: {[key: string]: string} = {};
// users["user1"] = "password123"
// users["User2"] = "Password"


export default function RootLayout() {
    const BackendAPI = "https://popnbackend-dnf9dch5hkdackgc.centralus-01.azurewebsites.net";
    const [authorized, setAuthorized] = useState(false);
    const [username, setUsername] = useState("");
    const logIn = async (user: string, pass: string): Promise<responseType> => {
        try {
            const response = await fetch(BackendAPI + "/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: user,
                    password: pass
                })
            });

            if(response.status === 200) {
                return {
                    approved: true,
                    message: "success"
                };
            } else if(response.status === 404) {
                return {
                    approved: false,
                    message: "Server Down/Not Found"
                };
            } else {
                const data = await response.json();
                return {
                    approved: false,
                    message: data.error
                };
            }
        }
        catch(err) {
            console.error("Unexpected error: ", err);
            return {
                approved: false,
                message: "Unexpected Error"
            };
        }
    }

    const signUp = async (user: string, pass: string): Promise<responseType> => {
        try {
            const response = await fetch(BackendAPI + "/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    email: user,
                    password: pass,
                    interests: ["interest1", "interest2"],
                    clubs: ["club1", "club2"]
                })
            });

            if(response.status === 201) {
                return {
                    approved: true,
                    message: "success"
                };
            } else if(response.status === 404) {
                return {
                    approved: false,
                    message: "Server Down/Not Found"
                };
            }
            else {
                const data: { error: string } = await response.json();
                return {
                    approved: false,
                    message: data.error
                };
            }
        }
        catch(err) {
            console.error("Unexpected error", err);
            return {
                approved: false,
                message: "Unexpected Error"
            };
        }
    }

    const logOut = () => {
        setAuthorized(false);
    }

    return (
        <AuthContext.Provider value={{
            authenticated: authorized,
            setAuthenticated: setAuthorized,
            username: username,
            setUsername: setUsername,
            logIn: logIn,
            signUp: signUp,
            logOut: logOut
        }}>
            <APIContext.Provider value="https://popnbackend-dnf9dch5hkdackgc.centralus-01.azurewebsites.net">
                <Stack>
                    <Stack.Screen name="(auth)" options={{
                        headerShown: false,
                    }} />
                    <Stack.Screen name="home" options={{
                        headerShown: false,
                    }} />
                    <Stack.Screen name="clubs/[id]" options={{
                        headerShown: false,
                    }} />
                    {/* <Stack.Screen name="(auth)/signup/index" /> */}
                </Stack>
            </APIContext.Provider>
        </AuthContext.Provider>
    );
}
