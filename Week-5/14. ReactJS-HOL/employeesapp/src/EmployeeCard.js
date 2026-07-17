import Styles from "./EmployeeCard.module.css";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function EmployeeCard({ employee }) {

    const theme = useContext(ThemeContext);

    return (
        <div className={`${Styles.card} ${Styles[theme]}`}>
            <h2>{employee.name}</h2>

            <p>{employee.email}</p>
            <p>{employee.phone}</p>

            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
}

export default EmployeeCard;