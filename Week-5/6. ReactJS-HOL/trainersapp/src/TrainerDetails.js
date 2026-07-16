import { useParams } from "react-router-dom";

function TrainerDetails(props) {

    const { id } = useParams();

    const trainer = props.trainers.find(
        (t) => t.trainerId === id
    );

    if (!trainer) {
        return <h3>Trainer not found</h3>;
    }

    return (

        <div>

            <h2>Trainers Details</h2>

            <h4>
                {trainer.name} ({trainer.technology})
            </h4>

            <p>{trainer.email}</p>

            <p>{trainer.phone}</p>

            <ul>

                {trainer.skills.map((skill, index) => (

                    <li key={index}>
                        {skill}
                    </li>

                ))}

            </ul>

        </div>

    );

}

export default TrainerDetails;