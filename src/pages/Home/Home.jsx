import { useLoaderData } from "react-router-dom";
import Donations from "../../components/Donations/Donations";
import Banner from "../../components/Header/Banner/Banner";
import { useState } from "react";


const Home = () => {

    const donations = useLoaderData();
    const [searchCategory, setSearchCategory] = useState('');
    const [categoryValue, setCategoryValue] = useState('');

    const handleSearch = (event) => {
        const search = event.target.value;
        setCategoryValue(search);
    }

    return (
        <div>
           <Banner handleSearch={handleSearch} categoryValue={categoryValue} setSearchCategory={setSearchCategory} ></Banner>
           <Donations donations={donations} searchCategory={searchCategory}></Donations>
        </div>
    );
};

export default Home;