function ListofPlayers() {

    const players = [

        { name: "Sachin", score: 95 },
        { name: "Virat", score: 88 },
        { name: "Dhoni", score: 65 },
        { name: "Rohit", score: 92 },
        { name: "Rahul", score: 45 },
        { name: "Hardik", score: 78 },
        { name: "Jadeja", score: 69 },
        { name: "Gill", score: 85 },
        { name: "Pant", score: 55 },
        { name: "Iyer", score: 73 },
        { name: "Surya", score: 98 }

    ];

    const lowScorePlayers = players.filter(
        player => player.score < 70
    );

    return (

        <div>

            <h2>List of Players</h2>

            <table border="1" cellPadding="8">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>

                <tbody>

                    {players.map(player => (

                        <tr key={player.name}>
                            <td>{player.name}</td>
                            <td>{player.score}</td>
                        </tr>

                    ))}

                </tbody>

            </table>

            <br />

            <h2>Players with score below 70</h2>

            <ul>

                {lowScorePlayers.map(player => (

                    <li key={player.name}>
                        {player.name} - {player.score}
                    </li>

                ))}

            </ul>

        </div>

    );

}

export default ListofPlayers;