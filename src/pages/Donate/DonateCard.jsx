/* eslint-disable react/prop-types */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonateCard = ({donate}) => {

    const {id, image, title, description, price} = donate || {};

    const handleAddToDonation = ()=>{

        const addedDonationArray = [];
        
        const donationItems = JSON.parse(localStorage.getItem('donations'));

        if(!donationItems){
            addedDonationArray.push(donate);
            localStorage.setItem('donations', JSON.stringify(addedDonationArray));
            toast("Donate successfully");
        }
        else{

            const isExists = donationItems.find(donate => donate.id ==id);

            if(!isExists){
                addedDonationArray.push(...donationItems, donate);
                localStorage.setItem('donations', JSON.stringify(addedDonationArray));
                toast("Donate successfully");
            }
            else{
                toast("Already donate");
            }
        }
    }

    return (
        <div className="w-full px-24">
            <div className="hero h-[60vh] relative">
                <img className="md:w-full md:h-[50vh]"src={image} alt="" />
                <div className="hero"></div>
                <div className="hero-content text-center text-neutral-content">
                <div className="absolute justify-center bottom-8 md:left-6 md:bottom-16">
                <button onClick={handleAddToDonation} className="btn btn-primary bg-[#FF444A] normal-case">Donate ${price}</button>
                </div>
            </div>
        </div>
        <h1 className="text-4xl font-bold pb-4">{title}</h1>
        <p>{description}</p>
        <ToastContainer />
    </div>
    );
};

export default DonateCard;