import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonateCard from "./DonateCard";


const Donate = () => {

    const [donate, setDonate] = useState({});

    const {id} = useParams();
    // console.log(id);

    const donations = useLoaderData();
    // console.log(donations);

    useEffect(()=>{
        const findDonate = donations?.find(donate=>donate.id== id)
        // console.log(findDonateCard);
        setDonate(findDonate);
        
    },[id, donations])
    // console.log(donate);

    return (
        <div>
           <DonateCard donate={donate}></DonateCard> 
        </div>
    );
};

export default Donate;