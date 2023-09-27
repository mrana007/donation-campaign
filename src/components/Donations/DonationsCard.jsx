/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const DonationsCard = ({donate}) => {

    const {id, image, category, title, card_bg, text_color, category_bg} = donate || {};

    return (
    <NavLink to={`/donations/${id}`}>
        <div className="card card-compact shadow-xl"
            style={{backgroundColor: card_bg, color: text_color}}>
            <figure><img className="w-full" src={image} alt="Donations" /></figure>
            <div className="card-body px-4">
            <h2 className="text-sm font-medium rounded w-20 text-center" style={{backgroundColor: category_bg}}>{category}</h2>
            <p className="text-xl font-semibold">{title}</p>
            </div>
        
        </div>
    </NavLink>
    );
};

export default DonationsCard;