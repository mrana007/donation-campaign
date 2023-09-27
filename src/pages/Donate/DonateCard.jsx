/* eslint-disable react/prop-types */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonateCard = ({donate}) => {

    const {id, image, title, description, price, button_bg} = donate || {};

    const handleAddToDonation = ()=>{

        const addedDonationArray = [];
        
        const donationItems = JSON.parse(localStorage.getItem('donations'));

        if(!donationItems){
            addedDonationArray.push(donate);
            localStorage.setItem('donations', JSON.stringify(addedDonationArray));
            toast("Congratulations! Donate successfully");
        }
        else{

            const isExists = donationItems.find(donate => donate.id ==id);

            if(!isExists){
                addedDonationArray.push(...donationItems, donate);
                localStorage.setItem('donations', JSON.stringify(addedDonationArray));
                toast("Congratulations! Donate successfully");
            }
            else{
                toast("Already donate this item");
            }
        }
    }

    return (
        <div className="px-5 pt-10 md:px-36">
            <div className="relative">
                <img className="w-full md:h-[50vh]"src={image} alt="" />
                <div className="absolute inset-x-0 bottom-0 left-0 bg-opacity-50 bg-black py-5 px-3">
                <button onClick={handleAddToDonation} className="btn btn-primary normal-case" style={{backgroundColor: button_bg}}>Donate ${price}</button>
            </div>
        </div>
        <h1 className="text-4xl font-bold pb-4 pt-8">{title}</h1>
        <p>{description}</p>
        <ToastContainer />
    </div>
    );
};

export default DonateCard;