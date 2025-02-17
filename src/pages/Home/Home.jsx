import FeatureStateCard from "../../sharedComponents/FeatureStateCard";
import Slider from "../../sharedComponents/Slider";

import { useLoaderData } from 'react-router-dom';
const Home = () => {
    // const [featureState,set]
    const featuresState = useLoaderData();
    return (
        <div>
            <Slider/>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 mt-5 justify-center">
                {
                    featuresState.map(featureState=><FeatureStateCard featureState={featureState}></FeatureStateCard>)
                }
            </div>
        </div>
    );
};

export default Home;