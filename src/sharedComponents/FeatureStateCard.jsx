

const FeatureStateCard = ({ featureState }) => {
    const { image, eastate_title, segment_name, price, Status, Area, location, facilities, description } = featureState;
    return (
        <div className="card bg-base-100 w-96 shadow-xl hover:scale-105">
            <figure className=" ">
                <img
                    src={image}
                    alt="real-eastate" />
            </figure>
            <div className="card-body">
                <p className="flex justify-between items-center">
                    <small className="bg-blue-300 rounded-full p-2 font-medium">{segment_name}</small>
                    <small className="bg-pink-300 rounded-full p-2 font-medium">For {Status}</small>
                </p>
                <h2 className="card-title font-serif">{eastate_title}</h2>

                <hr />
                <p className="text-sm font-sans">{description.slice(0, 100)}.....</p>
                <hr />
                <p className="flex justify-between items-center">
                    <p className="font-sans text-sm"><span className="font-bold">Size:</span> {Area}</p>
                    <span className="font-sans text-sm"><span className="font-bold">Price:</span> {price}</span>
                </p>
                <p><span className="font-bold font-serif mb-2">Facilities:</span> {facilities.map(facility => <ul className="font-serif font-medium text-base mt-1">- {facility}</ul>)}</p>
                <p className="font-sans text-base font-bold">{location}</p>
                <div className="card-actions">
                    <button className="btn btn-secondary w-full">View Property</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureStateCard;