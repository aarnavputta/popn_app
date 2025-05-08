import { createContext } from "react";

const APIContext = createContext<string>(
    "https://popnbackend-dnf9dch5hkdackgc.centralus-01.azurewebsites.net"
);

export { APIContext };
