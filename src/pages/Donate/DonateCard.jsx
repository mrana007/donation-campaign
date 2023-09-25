

const DonateCard = ({donate}) => {

    const {image, title, description, price} = donate;

    return (
        <div className="w-full px-24">
            <div className="hero h-[60vh] relative">
                <img className="md:w-full md:h-[50vh]"src={image} alt="" />
                <div className="hero"></div>
                <div className="hero-content text-center text-neutral-content">
                <div className="absolute justify-center bottom-8 md:left-6 md:bottom-16">
                <button className="btn btn-primary bg-[#FF444A]">Donate ${price}</button>
                </div>
            </div>
        </div>
        <h1 className="text-4xl font-bold pb-4">{title}</h1>
        <p>{description}</p>
    </div>
    );
};

export default DonateCard;