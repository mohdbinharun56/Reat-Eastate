import "aos/dist/aos.css";
import Aos from "aos";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const FeatureStateCard = ({ featureState }) => {

    // destructuring object
    const { id, image, eastate_title, segment_name, price, Status, Area, location, description } = featureState;
    
    // AOS Animation SlIDE-UP
    useEffect(()=>{
        Aos.init({
            duration: 1200,
            once: true
        })
    },[])
    
    return (
        <div className="card bg-base-100 shadow-xl" data-aos="slide-up">
            <figure className=" ">
                <img
                    src={image}
                    alt="real-eastate" />
            </figure>
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <small className="bg-blue-300 rounded-full p-2 font-medium">{segment_name}</small>
                    <small className="bg-pink-300 rounded-full p-2 font-medium">For {Status}</small>
                </div>
                <h2 className="card-title font-serif">{eastate_title}</h2>

                <hr />
                <p className="text-sm font-sans">{description.slice(0, 50)}.....<Link to={`/eastate-details/${id}`}><small className="text-blue-900">read more.</small></Link></p>
                <hr />
                <div className="flex justify-between items-center">
                    <p className="font-sans text-sm"><span className="font-bold">Size:</span> {Area}</p>
                    <span className="font-sans text-sm"><span className="font-bold">Price:</span> ${price}</span>
                </div>
                <p className="font-sans text-base font-bold">{location}</p>

                <Link to={`/eastate-details/${id}`}><button className="btn btn-secondary w-full">View Property</button></Link>
            </div>
        </div>
    );
};

export default FeatureStateCard;