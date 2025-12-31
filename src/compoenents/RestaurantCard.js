import { REST_CARD_IMG_CDN } from "../utils/common-constants";



// props: passing data dynamically to components usig props and here we destructured the props and used it
const RestaurantCard = ({resData}) => {
    
    return (
        <div className="res-card">
        
            <img
                src={`${REST_CARD_IMG_CDN}${resData.card.card.info.cloudinaryImageId}`}
                //image ko bhi waha se utaya and concatenate kiya hai
                alt="restaurant"
                className="res-img"
            />
            <h3 className="res-name">{resData.card.card.info.name}</h3>
            <p className="res-cuisine">{resData.card.card.info.cuisines.join(", ")}</p>
            <p className="res-locality">{resData.card.card.info.locality}</p>
            <div className="res-info">
                <span className="res-rating">
                    <span>★</span> {resData.card.card.info.avgRating}
                </span>
                <span>•</span>
                <span>{resData.card.card.info.sla?.deliveryTime} mins</span>
                <span>•</span>
                <span>{resData.card.card.info.costForTwo}</span>
            </div>
        </div>
    );
};
 export default RestaurantCard;