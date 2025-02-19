// import { useEffect } from "react";
import { useEffect, useState } from "react";
import { GiConsoleController } from "react-icons/gi";
import { useParams } from "react-router-dom";

const EastateDetails = () => {
    const [featureEastate, setFeatureEastate] = useState([]);

    const { id } = useParams();
    const numID = parseInt(id);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => {
                console.log(Array.isArray(data));
                const findFeatureEastate = data.find(EastateID => EastateID.id === numID);
                console.log(findFeatureEastate);
                setFeatureEastate(findFeatureEastate);
            })
    }, [])

    return (
        <div className="flex flex-col-reverse lg:flex-row justify-around items-center gap-6 lg:gap-0">
            <div className="ml-10">
                <div className="flex items-center">
                    <p className="text-base font-sans my-2 font-medium uppercase text-slate-600">for-{featureEastate.Status},</p>
                    <p className="text-sm font-sans my-2 pl-2  underline text-slate-500">{featureEastate.segment_name}</p>
                </div>
                <h1 className="text-xl md:text-4xl font-bold font-serif">{featureEastate.eastate_title}</h1>
                <div className="flex justify-start mt-2 items-center gap-20">
                    <p><span className="textt-lg font-medium font-sans">Area:</span> {featureEastate.Area}</p>
                    <p><span className="textt-lg font-medium font-sans">Price:</span> {featureEastate.price}</p>
                </div>
                <div className="w-96 md:w-full my-4">
                    <p className="italic text-base md:text-xl ">{featureEastate.description}</p>
                </div>
                <div>
                    <h1 className="text-xl font-bold underline items-start mb-3">Facilities</h1>
                    {
                        featureEastate.facilities?.map((facility, index) => <li className="mt-3 uppercase" key={index}>{facility}</li>)
                    }
                </div>
                <p className="mt-5"><span className="text-lg font-medium font-sans">Location:</span> {featureEastate.location}</p>

            </div>
            <div className="border-2 shadow-sm  shadow-slate-400 mx-3">
                <img src={featureEastate.image} className="md:max-w-2xl" />
            </div>

        </div>
    );
};

export default EastateDetails;