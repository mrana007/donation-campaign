/* eslint-disable react/prop-types */

const DonatedCard = ({donation}) => {

    const {category, title, donate_image, card_bg, text_color, category_bg, button_bg, price} = donation || {}; 

    return (
        <div>
            <div className="card card-side shadow-xl" style={{backgroundColor: card_bg, color: text_color}}>
                <figure><img className="h-full w-72" src={donate_image} alt="" /></figure>
                <div className="p-4">
                    <h2 className="rounded w-20 text-center" style={{backgroundColor: category_bg}}>{category}</h2>
                    <p className="text-2xl text-black font-bold">{title}</p>
                    <p className="font-semibold">${price}</p>
                    <div className="card-actions">
                        <button className="btn text-white" style={{backgroundColor: button_bg}}>View Details</button>
                    </div>
                </div>
            </div>           
        </div>
    );
};

export default DonatedCard;