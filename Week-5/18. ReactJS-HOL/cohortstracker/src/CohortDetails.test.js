import React from "react";
import { render, screen } from "@testing-library/react";

import CohortDetails from "./CohortDetails";
import { CohortsData } from "./Cohort";

describe("Cohort Details Component", () => {

    test("should create the component", () => {
        render(<CohortDetails cohort={CohortsData[0]} />);
    });

    test("should initialize the props", () => {
    render(<CohortDetails cohort={CohortsData[0]} />);

    expect(
        screen.getByRole("heading", { level: 3 })
    ).toHaveTextContent(CohortsData[0].cohortCode);
});

test("should display cohort code in h3", () => {
    render(<CohortDetails cohort={CohortsData[0]} />);

    const h3 = screen.getByRole("heading", { level: 3 });

    expect(h3.tagName).toBe("H3");
    expect(h3).toHaveTextContent(CohortsData[0].cohortCode);
});

    test("should always render same html", () => {
        const { asFragment } = render(
            <CohortDetails cohort={CohortsData[0]} />
        );

        expect(asFragment()).toMatchSnapshot();
    });

});