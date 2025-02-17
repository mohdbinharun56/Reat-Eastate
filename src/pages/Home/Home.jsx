import FeatureStateCard from "../../sharedComponents/FeatureStateCard";
import Slider from "../../sharedComponents/Slider";

import { useLoaderData } from 'react-router-dom';
const Home = () => {
    // const [featureState,set]
    const featuresState = useLoaderData();
    return (
        <div>
            <Slider/>

            <h1 className="text-xl lg:text-4xl mt-10 font-serif font-bold text-center">Featured Real Eastate</h1>
            <p className="w-1/2 mx-auto text-center mt-3 mb-10 text-base text-slate-500 font-normal">A state-of-the-art industrial warehouse designed for efficiency and scalability. Featuring advanced loading docks, ample storage space, and modern office facilities, this property is perfect for logistics and distribution businesses.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 mt-5 justify-center">
                {
                    featuresState.map(featureState=><FeatureStateCard featureState={featureState}></FeatureStateCard>)
                }
            </div>
        </div>
    );
};

export default Home;