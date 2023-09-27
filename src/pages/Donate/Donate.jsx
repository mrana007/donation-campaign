import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonateCard from "./DonateCard";


const Donate = () => {

    const [donate, setDonate] = useState({});

    const {id} = useParams();

    const donations = useLoaderData();

    useEffect(()=>{
        const findDonate = donations?.find(donate => donate.id == id)
        setDonate(findDonate);
        
    },[id, donations])

    return (
        <div>
           <DonateCard donate={donate}></DonateCard> 
        </div>
    );
};

export default Donate;