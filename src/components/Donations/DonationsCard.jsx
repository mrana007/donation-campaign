

const DonationsCard = ({donate}) => {

    const {image, category, title, card_bg, text_color, category_bg} = donate

    return (
    <div className="card card-compact bg-base-100 shadow-xl">
        <div style={{backgroundColor: card_bg, color: text_color}}>
        <figure><img src={image} alt="Donations" /></figure>
        <div className="card-body px-4">
        <h2 className="card-title text-sm font-medium" style={{backgroundColor: category_bg}}>{category}</h2>
        <p className="text-xl font-semibold">{title}</p>
        </div>
            </div>
    </div>
    );
};

export default DonationsCard;