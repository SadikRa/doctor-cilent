import { useLoaderData } from "react-router-dom";
import UserBookingCard from "./UserBookingCard";

const UserBooking = () => {

    const Userdata = useLoaderData()

    return (
        
        <div className="row">
            {
                Userdata.map(data =>  <UserBookingCard key={data._id} data={data}>

                </UserBookingCard>)
            }
        </div>
    );
};

export default UserBooking;