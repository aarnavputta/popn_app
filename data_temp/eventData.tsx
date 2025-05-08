type EventDataType = {
    name: string,
    description: string,
    city: string,
    state: string,
    date: Date,
    price: number
}

export const Data: EventDataType[] = [
    {
        name: "PSU Hackathon",
        description: "Penn State HackPSU bi-yearly hackathon",
        city: "State College",
        state: "PA",
        date: new Date(2025, 2, 12, 16),
        price: 0.00
    },
    {
        name: "Diwali",
        description: "SASA diwali celebration",
        city: "State College",
        state: "PA",
        date: new Date(2024, 9, 17, 18),
        price: 10.00
    },
    {
        name: "Concert",
        description: "Hip hop concert",
        city: "New York City",
        state: "NY",
        date: new Date(2025, 4, 5, 17, 30),
        price: 25.00
    },
    {
        name: "Hockey Game",
        description: "Hip hop concert",
        city: "Madison",
        state: "WI",
        date: new Date(2025, 6, 23, 15, 30),
        price: 15.00
    }
]
