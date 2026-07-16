function IndianPlayers() {

    const IndianTeam = [

        "Sachin",
        "Sehwag",
        "Dravid",
        "Ganguly",
        "Yuvraj",
        "Dhoni"

    ];

    const oddPlayers = IndianTeam.filter((player, index) => index % 2 === 0);

    const evenPlayers = IndianTeam.filter((player, index) => index % 2 !== 0);

    const T20players = [

        "Virat",
        "Rohit",
        "Surya"

    ];

    const RanjiPlayers = [

        "Pujara",
        "Rahane",
        "Jaiswal"

    ];

    const mergedPlayers = [...T20players, ...RanjiPlayers];

    return (

        <div>

            <h2>Odd Team Players</h2>

            <ul>

                {oddPlayers.map(player => (

                    <li key={player}>{player}</li>

                ))}

            </ul>

            <h2>Even Team Players</h2>

            <ul>

                {evenPlayers.map(player => (

                    <li key={player}>{player}</li>

                ))}

            </ul>

            <h2>Merged Players</h2>

            <ul>

                {mergedPlayers.map(player => (

                    <li key={player}>{player}</li>

                ))}

            </ul>

        </div>

    );

}

export default IndianPlayers;