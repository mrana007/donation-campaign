import DonationsCard from "./DonationsCard";


const Donations = ({donations}) => {
    // console.log(donations);
    return (
        <div className="max-w-screen-xl justify-center mx-auto items-center mt-28">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    donations?.map(donate=> <DonationsCard donate={donate} key={donate.id}></DonationsCard>)
                }
            </div>
        </div>
    );
};

export default Donations;