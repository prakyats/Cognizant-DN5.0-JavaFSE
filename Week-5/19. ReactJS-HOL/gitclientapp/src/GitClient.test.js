import axios from "axios";
import GitClient from "./GitClient";

jest.mock("axios");

describe("Git Client Tests", () => {

    test("should return repository names for techiesyed", async () => {

        const mockedRepos = [
            {
                id: 1,
                name: "ReactApp",
            },
            {
                id: 2,
                name: "NodeAPI",
            },
            {
                id: 3,
                name: "Portfolio",
            },
        ];

        axios.get.mockResolvedValue({
            data: mockedRepos,
        });

        const result = await GitClient.getRepositories("techiesyed");

        expect(axios.get).toHaveBeenCalledWith(
            "https://api.github.com/users/techiesyed/repos"
        );

        expect(result).toEqual(mockedRepos);

    });

});