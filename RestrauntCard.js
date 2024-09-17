const RestrauntCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
    // Base URL for Swiggy media assets
    const BASE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

    // Construct the full URL using the imageId
    const imageURL = BASE_URL + cloudinaryImageId;
    
    return (
        <div className="card">
            <img 
                src={imageURL}
                alt={name}
                className="card-image"
            />
            <h2 className="Name">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    );
};

export default RestrauntCard;


 