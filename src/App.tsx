import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import GamePage from "./Pages/GamePage";

const root = createRoot(document.getElementById('root'))

const App = () => {

    return (
        <React.StrictMode>
            <GamePage></GamePage>
        </React.StrictMode>
    )
}

root.render(<App/>)