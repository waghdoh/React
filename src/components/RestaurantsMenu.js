import { useLoaderData } from "react-router-dom";

// Dummy data generator for restaurant menu
const generateDummyMenuData = (resId) => {
    return {
        cards: [
            // Restaurant info card
            {
                card: {
                    card: {
                        info: {
                            id: resId,
                            name: "Biryani House",
                            cuisines: ["Biryani", "North Indian", "Mughlai"],
                            avgRating: 4.3,
                            totalRatingsString: "1.2K+ ratings",
                            areaName: "Koramangala",
                            sla: {
                                lastMileTravelString: "2.5 km",
                                deliveryTime: 25
                            },
                            costForTwo: 500,
                            cloudinaryImageId: "abc123"
                        }
                    }
                }
            },
            // Menu grouped card
            {
                groupedCard: {
                    cardGroupMap: {
                        REGULAR: {
                            cards: [
                                {
                                    card: {
                                        card: {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Recommended",
                                            itemCards: [
                                                {
                                                    card: {
                                                        info: {
                                                            id: "item1",
                                                            name: "Chicken Biryani",
                                                            description: "Aromatic basmati rice cooked with tender chicken pieces, spices, and herbs",
                                                            price: 25000,
                                                            imageId: "chicken-biryani",
                                                            ratings: {
                                                                aggregatedRating: {
                                                                    rating: 4.5,
                                                                    ratingCountV2: "120"
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                {
                                                    card: {
                                                        info: {
                                                            id: "item2",
                                                            name: "Mutton Biryani",
                                                            description: "Rich and flavorful mutton biryani with premium basmati rice",
                                                            price: 35000,
                                                            imageId: "mutton-biryani",
                                                            ratings: {
                                                                aggregatedRating: {
                                                                    rating: 4.7,
                                                                    ratingCountV2: "89"
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                {
                                                    card: {
                                                        info: {
                                                            id: "item3",
                                                            name: "Veg Biryani",
                                                            description: "Delicious vegetarian biryani with mixed vegetables",
                                                            price: 18000,
                                                            imageId: "veg-biryani",
                                                            ratings: {
                                                                aggregatedRating: {
                                                                    rating: 4.2,
                                                                    ratingCountV2: "95"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    card: {
                                        card: {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Rice & Biryani",
                                            itemCards: [
                                                {
                                                    card: {
                                                        info: {
                                                            id: "item4",
                                                            name: "Hyderabadi Biryani",
                                                            description: "Authentic Hyderabadi style biryani with special spices",
                                                            price: 28000,
                                                            imageId: "hyderabadi-biryani",
                                                            ratings: {
                                                                aggregatedRating: {
                                                                    rating: 4.6,
                                                                    ratingCountV2: "156"
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                {
                                                    card: {
                                                        info: {
                                                            id: "item5",
                                                            name: "Egg Biryani",
                                                            description: "Flavorful biryani with boiled eggs",
                                                            price: 20000,
                                                            imageId: "egg-biryani",
                                                            ratings: {
                                                                aggregatedRating: {
                                                                    rating: 4.3,
                                                                    ratingCountV2: "78"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    card: {
                                        card: {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Accompaniments",
                                            itemCards: [
                                                {
                                                    card: {
                                                        info: {
                                                            id: "item6",
                                                            name: "Raita",
                                                            description: "Cool and refreshing yogurt side dish",
                                                            price: 5000,
                                                            imageId: "raita",
                                                            ratings: {
                                                                aggregatedRating: {
                                                                    rating: 4.4,
                                                                    ratingCountV2: "234"
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                {
                                                    card: {
                                                        info: {
                                                            id: "item7",
                                                            name: "Salad",
                                                            description: "Fresh mixed salad",
                                                            price: 4000,
                                                            imageId: "salad",
                                                            ratings: {
                                                                aggregatedRating: {
                                                                    rating: 4.1,
                                                                    ratingCountV2: "112"
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                {
                                                    card: {
                                                        info: {
                                                            id: "item8",
                                                            name: "Pickle",
                                                            description: "Spicy mixed pickle",
                                                            price: 3000,
                                                            imageId: "pickle",
                                                            ratings: {
                                                                aggregatedRating: {
                                                                    rating: 4.0,
                                                                    ratingCountV2: "67"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        ]
    };
};

// Loader function - returns dummy data instead of making API call
export const restaurantMenuLoader = async ({ params }) => {
    const { resId } = params;
    
    if (!resId) {
        throw new Error("Restaurant ID is missing from URL parameters.");
    }
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return dummy data
    return generateDummyMenuData(resId);
};

const RestaurantMenu = () => {
    const resInfo = useLoaderData();

    // SAFE restaurant info extraction
    const restaurantData = resInfo?.cards?.find(
        c => c.card?.card?.info
    )?.card?.card?.info || {};

    const {
        name,
        cuisines,
        avgRating,
        totalRatingsString,
        areaName,
        sla,
    } = restaurantData;

    // SAFE item cards extraction - handle both ItemCategory and NestedItemCategory
    const regularCards =
        resInfo?.cards
            ?.find(c => c.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    // Extract all menu categories and items
    const menuCategories = [];

    regularCards.forEach(card => {
        const cardType = card?.card?.card?.["@type"];
        
        if (cardType === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
            // Simple ItemCategory
            const category = card.card.card;
            if (category.itemCards && category.itemCards.length > 0) {
                menuCategories.push({
                    title: category.title || "Recommended",
                    itemCards: category.itemCards
                });
            }
        } else if (cardType === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") {
            // NestedItemCategory - has multiple categories
            const nestedCategory = card.card.card;
            if (nestedCategory.categories && nestedCategory.categories.length > 0) {
                nestedCategory.categories.forEach(cat => {
                    if (cat.itemCards && cat.itemCards.length > 0) {
                        menuCategories.push({
                            title: cat.title || nestedCategory.title || "Menu",
                            itemCards: cat.itemCards
                        });
                    }
                });
            }
        }
    });

    // Handler for ADD button click
    const handleAddItem = (itemInfo) => {
        console.log("Adding item to cart:", itemInfo.name);
        // TODO: Add cart functionality here
        alert(`Added ${itemInfo.name} to cart!`);
    };

    return (
        <div className="menu-container">
            <div className="menu-header">
                <div className="res-details">
                    <h1>{name}</h1>
                    <p className="cuisines">{cuisines?.join(", ")}</p>
                    <p className="area">
                        {areaName}, {sla?.lastMileTravelString}
                    </p>
                </div>
                <div className="res-rating-info">
                    <span className="rating">⭐ {avgRating}</span>
                    <span className="total-ratings">{totalRatingsString}</span>
                </div>
            </div>

            <div className="menu-divider"></div>

            <div className="menu-list">
                {menuCategories.length === 0 ? (
                    <p>No menu items available</p>
                ) : (
                    menuCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="menu-category">
                            <h2 className="category-title">
                                {category.title} ({category.itemCards.length})
                            </h2>
                            <ul>
                                {category.itemCards.map(item => {
                                    const info = item.card?.info || item.card?.card?.info;
                                    if (!info) return null;

                                    // Handle price - can be in price, defaultPrice, or variantsV2
                                    let price = info.price ?? info.defaultPrice ?? 0;
                                    
                                    // If price is 0, check variantsV2
                                    if (price === 0 && info.variantsV2?.variantGroups) {
                                        const firstVariant = info.variantsV2.variantGroups[0]?.variations?.[0];
                                        if (firstVariant?.price) {
                                            price = firstVariant.price * 100; // Convert to paise
                                        }
                                    }

                                    // If still 0, check pricingModels
                                    if (price === 0 && info.variantsV2?.pricingModels) {
                                        const firstModel = info.variantsV2.pricingModels[0];
                                        if (firstModel?.price) {
                                            price = firstModel.price;
                                        }
                                    }

                                    return (
                                        <li key={info.id} className="menu-item">
                                            <div className="item-info">
                                                <h3>{info.name}</h3>
                                                {price > 0 && (
                                                    <p className="item-price">
                                                        ₹{price / 100}
                                                    </p>
                                                )}
                                                {info.description && (
                                                    <p className="item-desc">
                                                        {info.description}
                                                    </p>
                                                )}
                                                {info.ratings?.aggregatedRating?.rating && (
                                                    <p className="item-rating">
                                                        ⭐ {info.ratings.aggregatedRating.rating} ({info.ratings.aggregatedRating.ratingCountV2 || info.ratings.aggregatedRating.ratingCount})
                                                    </p>
                                                )}
                                            </div>

                                            <div className="item-img-container">
                                                {info.imageId && (
                                                    <img
                                                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${info.imageId}`}
                                                        alt={info.name}
                                                    />
                                                )}
                                                <button 
                                                    className="add-item-btn"
                                                    onClick={() => handleAddItem(info)}
                                                >
                                                    ADD
                                                </button>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default RestaurantMenu;
