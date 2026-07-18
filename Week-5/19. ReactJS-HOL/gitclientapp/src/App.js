import React, { useEffect, useState } from "react";
import GitClient from "./GitClient";

function App() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        GitClient.getRepositories("techiesyed")
            .then((data) => {
                setRepositories(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>GitHub Repositories</h1>

            <ul>
                {repositories.map((repo) => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;