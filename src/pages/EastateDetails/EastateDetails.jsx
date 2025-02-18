import { useParams } from "react-router-dom";

const EastateDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>This is Eastate Details Page: {id}</h1>
        </div>
    );
};

export default EastateDetails;