// import { useContext } from "react";
import { useEffect, useState } from "react";
import FeatureStateCard from "../../sharedComponents/FeatureStateCard";
import Slider from "../../sharedComponents/Slider";


// import { CreateContext } from "../../sharedComponents/Provider/AuthProvider";
const Home = () => {
    const [featureState,setFeatureState] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(Array.isArray(data));
            setFeatureState(Array.isArray(data)?data:[]);
        })
    },[])
    return (
        <div>
            <Slider />

            <h1 className="text-xl lg:text-4xl mt-10 font-serif font-bold text-center">Featured Real Eastate</h1>
            <p className="w-1/2 mx-auto text-center mt-3 mb-10 text-base text-slate-500 font-normal">A state-of-the-art industrial warehouse designed for efficiency and scalability. Featuring advanced loading docks, ample storage space, and modern office facilities, this property is perfect for logistics and distribution businesses.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-20 mt-5 justify-center">
                {
                    featureState.map(featureState => <FeatureStateCard key={featureState.id} featureState={featureState}></FeatureStateCard>)
                }
            </div>
        </div>
    );
};

export default Home;