import { useEffect, useState } from "react";
import { getList } from "../../../public/utlities";
import { useLoaderData } from "react-router-dom";
import FeatureStateCard from "../../sharedComponents/FeatureStateCard";

const Lists = () => {
    const [saveLists, setSaveLists] = useState([]);
    const featureEastate = useLoaderData();

    useEffect(() => {
        const getSavedListId = getList(); // get list item from getList()-localstorage
        console.log(getSavedListId);
        // filter
        const isExistEastate = featureEastate.filter(eastate => getSavedListId.includes(eastate.id));
        // console.log(...isExistEastate);
        setSaveLists([...isExistEastate])

    }, [])
    // console.log("Eastate List is: ", saveLists);

     // title 
     useEffect(() => {
        document.title = "My List | Real Eastate Hub";
    }, [])

    return (
        <div>
            <div className=" text-center">
                <h1 className="text-xl md:text-4xl font-bold">My Listings & Saved Properties</h1>
                <p className="text-base font-normal text-slate-600 mt-5">Here’s a quick view of the properties you’ve saved or listed.<br></br> Manage and track them all in one place with ease.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-20 mt-5 justify-center mx-3">
                {
                    saveLists.map(list => <FeatureStateCard key={list.id} featureState={list}></FeatureStateCard>)
                }
            </div>
        </div>
    );
};

export default Lists;