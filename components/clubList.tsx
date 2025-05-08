import { Text, View, FlatList, StyleSheet } from "react-native"

const Data: ItemData[] = [
    {
        name: "Basketball",
        description: "PSU basketball club we hold public practice sessions every Tuesday/Thursday"
    },
    {
        name: "Pool",
        description: "Penn State pool and billiards club join the groupme for tournament dates"
    },
    {
        name: "Nittany AI",
        description: "Nittany AI competition enter as a team with an innovative idea using AI and win real money"
    }
]

type ItemData = {
    name: string,
    description: string
}



// export default function ClubList({ Header }: React.Component) {
//     const render = ({item}: {item: ItemData}) => {
//         return <ClubEntry item={item} />
//     }
//     return (
//         <FlatList 
//             data={Data}
//             renderItem={render}
//             contentContainerStyle={{ gap: "5%" }}
//             ListHeaderComponent={Header}
//         />
//         // <Text>df</Text>
//         // <ClubEntry item={Data[0]} />
//     )
// }



function ClubIcon() {

}

const style = StyleSheet.create({
    container: {
        width: "90%",
        height: "100%",
        backgroundColor: "#1A1A1A",
        borderRadius: 25,
    }
})
