/* eslint-disable react/prop-types */
import DonationsCard from "./DonationsCard";


const Donations = ({donations, searchCategory}) => {
    
    const search = searchCategory;
    const searchCase = search.toLowerCase();

    return (
        <div className="max-w-screen-xl justify-center mx-auto items-center my-28">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-3">
                {
                    donations.filter((dtn) => {
                        return searchCase === '' ? dtn : dtn?.category?.toLowerCase().includes(searchCase);
                    }).map(donate=> <DonationsCard donate={donate} key={donate.id}></DonationsCard>)
                }
            </div>
        </div>
    );
};

export default Donations;