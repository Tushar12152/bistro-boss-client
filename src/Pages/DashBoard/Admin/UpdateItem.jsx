import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const UpdateItem = () => {
    const item=useLoaderData()
    console.log(item);
    return (
        <div>
            <SectionTitle heading='Update Item' subHading='update info'></SectionTitle>
        </div>
    );
};

export default UpdateItem;