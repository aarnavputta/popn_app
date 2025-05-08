// import * as fs from 'fs';
// import Papa from 'papaparse';

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



// const loadCSV = async (): Promise<ClubEntry[]> => {
//     const response = await fetch('/data.csv'); // Adjust path if needed
//     const csvText = await response.text();
    
//     // Parse CSV with PapaParse
//     const { data } = Papa.parse<ClubEntry>(csvText, {
//       header: true,
//       skipEmptyLines: true,
//       transform: (value) => (value === 'N/A' ? null : value),
//     });
    
//     return data;
// };

// let Data: ClubEntry[] = [];
// loadCSV().then((data) => {
//     Data = data;
// });


// const fileContent = fs.readFileSync("sanitized_data.csv", "utf-8")
// const result = Papa.parse<ClubEntry>(fileContent, {
//     header: true,
//     skipEmptyLines: true
// });

// const Data: ClubEntry[] = result.data.map(row => {
//     return {
//         name: row.name,
//         description: row.description,
//         link: row.link,
//         facebook: (row.facebook === "N/A") ? null : row.facebook,
//         linkedin: (row.linkedin === "N/A") ? null : row.linkedin,
//         instagram: (row.instagram === "N/A") ? null : row.instagram,
//         youtube : (row.youtube === "N/A") ? null : row.youtube,
//         website: row.website
//     }
// })





type ClubData = {
    name: string,
    description: string
}

const Data: ClubData[] = [
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
    },
    {
        name: "HackPSU",
        description: "Computer Science club at Penn State we host hackathons once a semester"
    },
    {
        name: "SASA",
        description: "South Asian Student Association. Social club for South Asian students at Penn State"
    }
]

function getClubByID(id: string) {
    // For now id is the club name
    // As we change the app we will possibly add a unique ID for each club
    for(let i = 0; i < Data.length; i++) {
        if(Data[i].name === id) {
            return Data[i];
        }
    }
}

// function getClubByID(id: string): ClubEntry {
//     // For now id is the club name
//     // As we change the app we will possibly add a unique ID for each club
//     for(let i = 0; i < Data.length; i++) {
//         if(Data[i].name === id) {
//             return Data[i];
//         }
//     }

//     // Return smth if no match is found
//     return Data[0];
// }

export { Data, getClubByID };
