import { useLoaderData } from "react-router-dom";
import Donations from "../../components/Donations/Donations";
import Banner from "../../components/Header/Banner/Banner";
import { useState } from "react";



const Home = () => {

    const donations = useLoaderData();
   
    const [searchCategory, setSearchCategory] = useState('');
    const [categoryVal, setCategoryVal] = useState('');

    const handleSearch = (event) => {
        const val = event.target.value;
        setCategoryVal(val);
    }

    return (
        <div>
           <Banner handleSearch={handleSearch} categoryVal={categoryVal} setSearchCategory={setSearchCategory} ></Banner>
           <Donations donations={donations} searchCategory={searchCategory}></Donations>
        </div>
    );
};

export default Home;