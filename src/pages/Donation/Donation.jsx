import { useEffect, useState } from "react";
import DonatedCard from "../../components/Donations/DonatedCard";


const Donation = () => {

    const [donations, setDonations] = useState([]);

    const [notFound, setNotFound] = useState(false);
    const [isShow, setIsShow] = useState(false);
    
    useEffect(()=>{
        const donateItem = JSON.parse(localStorage.getItem('donations'));
        
        if(donateItem){
            setDonations(donateItem)
        }
        else{
            setNotFound('No Donation Yet')
        }
    },[])

    return (
        
        <div>
            {
                notFound? <p className="text-5xl font-bold flex text-center justify-center items-center h-[70vh]">{notFound}</p> :
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-4 mt-9">
                        {
                            isShow? donations?.map(donation => (<DonatedCard key={donation.id} donation={donation}></DonatedCard>)): donations?.slice(0,4).map(donation => (<DonatedCard key={donation.id} donation={donation}></DonatedCard>))
                        }
                    </div>
                    <div className="flex justify-center my-8">
                        {
                            donations?.length > 4 && <button onClick={() => setIsShow(!isShow)} className="btn bg-red-600 text-white">{isShow ? "See Less" : "See More"}</button>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;