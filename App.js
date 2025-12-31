import React from "react";
import ReactDom from "react-dom/client";
/**
 * -Heading
 *      - Logo
 *      -  nav items
 * -Body
 *      -search
 *      - restaurants container
 *      - restaurant card
 * -Footer
 *      - copyright
 *      - links
 *      - contact
 *      - address
 */
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAABC1BMVEX/////dxP/jxn/ehP/jBn/gBX/fBT/iBf/ihj/hRb/gxX/fBL+/vz/jhr/igD/cwD68+716N772r3y4tbppnvmxK357ujv2cns0sDhvKP9+fbjUADnXAz8jCHpybT+jSv8hB/upor0ahD9fwDtn4PqWgDtlmvpYgD3cRD/bwD/iwD+kyztahD2vqL0chHjUgDiRwD8gB/3hDj+u4f6yaz9iirzZAD83cz4q4HoflXxuaXvWgDtmGL+n0b8tnj60a7+qV35wpT0za7+mDX2qGbtvZr4nEz9yqL+wJLss4jxpmr1gi3meETyj1L95tb8sYP0yLbtcSLlYyDyg0T0eSrlaTX1jkrpm2rtlVsW40FJAAAImklEQVR4nO2de1viRhSHwSwgms2F2ICAbk1AUoTgZQtrve2uolVXa7dbt9//k3TODLjIJZlJIcyk8z7bP9annCfz7u+cSQKSVEoikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIuEddZ4sezERGB75HFZfxognAo7WMB8L86Bn2uUXD8teGC3oQI3C+dmKNi9Wzs4vTIEsoIMsFz42tebKPGk2mx8vbMMQwgIycLM3ZwEDtL1PpgAW0NEV9rRFCMA0925sG1tY9kJno6aMj4szAGjXFnQEvxLUVK+5kC4Yodn8bOIoLHux01FTF+6CDQDaJ34lqKlPi+2DFwlHpsmnBDV1E48CkGDBaRN3ElAjxKUA2sHiMgmP8SlAk/EzSOBsd1DLlzEqWFnZK6E9ki8JauoozhigIFwVsYRlL/wHKuqEt/GivS/y1Q1q6qP2JmbOSlyNBBIDdFxv8Z/x/6b8iP7/nPXit1ofdQNPDq7ibgWk/LqEu2HZix9ia29id/BW2+QoCHCGGOMgGKLdkYmw7OVjVPV6GQ7eXG7z0wyqEVHB8HbhasSXb5a4OUdQCxEcaK67d33++83NzdHV2ZbrRhCh3XIzFeGamfHoVzXt6sIeKWF/vlp1c4watDtumkFVz9kcrLqXF+XJMoVrZIFJw/V2CXaGJax5HFVlO0nUtgozKj1eu6ssFs5+4sfBJcNxr7pHAbUu3DyDhT3kwOTiNoJa3lulJqf1AosZZ9AQlGxtcjIQVBYHuS0jrN4dvQRuHLDkIPduchZOcLROK0FEB7ktCgUgIU9ngSsHdIecc026induPkdTkhsHKrUDd9aeOMFhhkZCTjwH7jl1TXN9jUaCcA5yq1TDgHCzLp4DCug7AbjPQBJCEM1B/oyp6mfvIB8qQTQH7uzzw/K07YImCII5yF/OLFCs7H+Z/GmbIghcOQhvXfdmZoHdTnV/MiSGdxAqgScH70Id5N3Z1wnH1WpnSqM8+AdrwRLyPDkIz8Ha9ewCu8jB4+SP2zgIgZV5chCeg4BWQA5a9SkOTCc0CEI5yLtTFjlkt9GqT9s0Wv5BJtABV73wLh+GG3COiBw0pjl48HAQAhDKwdqvAQVmOfjg+JkEOXADRiI46E5zsIscZBLk4C6gwAwHVqPlZ5Pk4I+AAsiB9wC/owBrUcuGbVrFp50vnQYMxcBm+DlJDnyv263XO0CF0KlWW/8zB77farWqo6C/+8lyEDQTa/WG43lOo9GoExqNFsZH+4I4DtYCya9l7gMKGO+HtDE7//wJFnyIQSawsFgO1tmO07z1iIIkOUhT3lV/wb5XiIJ8Yhwo71nLPqYzYTEQyQFi/Ttz3ftsmAKxHGSyQUNxOofoLDE58wA5yHisA0GFrTFZDtKsA8Fu+H5YN4jkAP17Kg+MZZ/qrTAJGZEcIAlZj+GdNqDWCG0G0RxkvCe2sl8T6ICxGawKvn0gjoNfM+FkPTu81g92OoMcBCGegzZL1a/VQQ6S5CDj+wzH2qvALZTEOch2GYJwXK+SrTFhDnz67dGsVCnGgXAOslm/+4G2Zq2DWyF5OUASduhKGpVqteWFtoKQDvxuq7ZTG7AzZPJd+R0cA8EcrFM5QBPBwXfQK6Ps18Yr4hg44a0gqINWq1EdozPhoAYTEbVCmIR14Ry8SBjeQie30av1cQf2PsTAC1UgogMiwev+tbvTbrfJnfS/Gq2J3eK4U204EIOwqiI6IBJe3VDqdScc9FAMUCsoic1BNquPOfDGHXztgAJwEFZPRAdYgvLqbfhed/zM6TeIgUMxEQV1gCXoo9fQEw5sooBiIorqACTopyMv7p04rx2ggQitkBbQQZYeZfRDJ+Bgd6TY0yAGClUpcR1430Ze/eWkO/KxPQM+e+E4XjrZDhTFe3XpZI+u4LjCEgNhHaAceN0ZbzrBnlAFBbAxhlcSeB6k0ani1ErmPukE7ICC9QNBHSioGbyTqbfV/u4MOoGyFThzQA9uBufEmixUw3sCGYh0tXhy8DODAyKh+22izhMeBiwKuHLAmAM0EbyTiSvmyqAT8L4oogP6eTCYCM7J2Mdz/64MY0A5DbibBywOSBCc+qs77buDTqAeiII7wBKcVxvkb8NtkSEGfDk4UJiBbvhxutgDBYNOYEBwB+nRkWAPFXhsRbhxkFLL9+wOoBucOnlrQf06mIeMMeDJgfqgR5CAgtAlv996vP+yLbJxyJGD0ygOIAh4JNRehgGrg2d+HJR/j+KASHhKtV+GAasC/ZQjB4VoDkBCtwazIJICRd8gX5y3bAEpcGBHcoD3BuekSq6U2BUoeh++K8zg4Zs01XL5OdJASGMJDjIACpingXK/yc/3pZXRQEhHA0sYKGAFjwOLi3GQSpXL1i8RHSAJmCgv1fvcjET8O4kPUYNALER64SFuBX4cFCIHITJoV+DmKyTxQDCeowchIoebHLUCDkIv7iCgGOBdgYezAwA5ML7HK0F/4CsGcPlsWAexdsNBn6eJCMBvq2/HGQTcCTzFgATBbscnQf8OnWDx9WwetDXY5oe4JOj/bEIn8PQICgB/d0NMEogCzh5FkiLdYJobcUj45ZQo4KsTACzB6uuL3h10NA6JAp4G4gA4WzSt0vNio6Af9rEC7p7ORMBz0SreZhcXBV1BGwK6TCAp4E8BdAMkoVj6oCymI3TlFEKArpR4VZAi7WBbVnF741CfswZU7xAygAwUeVYwOFeCKJQ2Nx6+wYHPB+Xb8/f+qAH+xuEPcD8QC9vbm/3bjXlw24f1IwFgwLJ5DgEGS8AWsIbt7Z/mA1p/qYgyYPL+WF/M0IKJBgOImAuokmVBF/D/eGcMeUo90oA8IBHzAQUAP9mZ/wwMGWoAEXMBSgnztPchKtEwT1SxDGDUebPsBf0n/r8rl0gkEolEIpFIJBKJRCKRSCQSiUQikUgkkqTzLzDESdLuHVSkAAAAAElFTkSuQmCC"
                    alt="company-logo"
                    className="logo-img"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
// props: passing data dynamically to components usig props and here we destructured the props and used it
const RestaurantCard = ({resData}) => {
    
    return (
        <div className="res-card">
        
            <img
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.card.card.info.cloudinaryImageId}
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
                <span>{resData.card.card.info.sla.deliveryTime} mins</span>
                <span>•</span>
                <span>{resData.card.card.info.costForTwo}</span>
            </div>
        </div>
    );
};
 const resList = [
    {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1146492",
              "name": "Biryani Talkiez - Kebabs & Asian Meals",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/3/11/67652a6c-f5d7-4c63-9e63-3430700e52e7_8f24c1ee-6b54-4383-8d21-965124755d28.jpg_compressed",
              "locality": "HSR",
              "areaName": "HSR",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Biryani",
                "Kebabs",
                "rolls",
                "Chinese",
                "Desserts"
              ],
              "avgRating": 4.2,
              "parentId": "631658",
              "avgRatingString": "4.2",
              "totalRatingsString": "93",
              "promoted": true,
              "adTrackingId": "cid=0fe8a48c-53b9-4b32-933c-112c0a67c2da~p=0~adgrpid=0fe8a48c-53b9-4b32-933c-112c0a67c2da#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1146492~plpr=COLLECTION~eid=b6fce015-7fc3-42a4-914d-2b6ea64b2b94~srvts=1767161158556~collid=83639",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 4.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-01-01 01:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹149",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "isNewlyOnboarded": true,
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "0fe8a48c-53b9-4b32-933c-112c0a67c2da"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=1146492&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "391005",
              "name": "ZAZA Mughal Biryani",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/d8552b11-ea4b-46e6-8b5c-287640b049cf_391005.jpg",
              "locality": "Patel Narayana Reddy Layout",
              "areaName": "EJIPURA",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Biryani",
                "North Indian",
                "Awadhi"
              ],
              "avgRating": 4.4,
              "parentId": "22473",
              "avgRatingString": "4.4",
              "totalRatingsString": "670",
              "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 0.8,
                "serviceability": "SERVICEABLE",
                "slaString": "20-30 mins",
                "lastMileTravelString": "0.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-01-01 02:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "bolt!",
                          "imageId": "android/static-assets/icons/big_rx.png"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=391005&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "705624",
              "name": "Aromas of Biryani",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/10/28/5b044717-c90d-4b66-b98d-0481959658c1_725a20ff-024b-4030-88d0-19944a6ac97d.jpg",
              "locality": "S T Bed Extension",
              "areaName": "Koramangala",
              "costForTwo": "₹600 for two",
              "cuisines": [
                "Biryani",
                "North Indian",
                "Tandoor",
                "Beverages"
              ],
              "avgRating": 4.3,
              "parentId": "36155",
              "avgRatingString": "4.3",
              "totalRatingsString": "1.9K+",
              "promoted": true,
              "adTrackingId": "cid=d0a848f5-4b44-4072-bc1e-5d5145b2fe35~p=1~adgrpid=d0a848f5-4b44-4072-bc1e-5d5145b2fe35#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=705624~plpr=COLLECTION~eid=96957546-93ca-4fcb-90b2-619ad014ee59~srvts=1767161158556~collid=83639",
              "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-01-01 02:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {

              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "android/static-assets/icons/big_rx.png",
                          "description": "bolt!"
                        }
                      }
                    ]
                  }
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.5",
                  "ratingCount": "503"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "d0a848f5-4b44-4072-bc1e-5d5145b2fe35"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=705624&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "142291",
              "name": "Aroma's Hyderabad House",
              "cloudinaryImageId": "jdfi5bh0hmdet7g7qk5z",
              "locality": "Sector 4",
              "areaName": "HSR",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Biryani",
                "Hyderabadi",
                "Mughlai",
                "Chinese"
              ],
              "avgRating": 4,
              "parentId": "71",
              "avgRatingString": "4.0",
              "totalRatingsString": "16K+",
              "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 4.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-01-01 01:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹56",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=142291&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "485933",
              "name": "Dindigul Thalappakatti - Since 1957\n",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/21/f89894cc-4731-432b-96bb-3788b53336c6_485933.JPG",
              "locality": "Nexus",
              "areaName": "Koramangala",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "South Indian",
                "Biryani",
                "Chinese",
                "North Indian"
              ],
              "avgRating": 4.3,
              "parentId": "641506",
              "avgRatingString": "4.3",
              "totalRatingsString": "2.9K+",
              "promoted": true,
              "adTrackingId": "cid=482ad629-f547-4f00-9739-fdfa6a8ea8b9~p=2~adgrpid=482ad629-f547-4f00-9739-fdfa6a8ea8b9#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=485933~plpr=COLLECTION~eid=9fbf199a-62e6-4d0b-9074-fb818f3a93f2~srvts=1767161158556~collid=83639",
              "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-12-31 23:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "482ad629-f547-4f00-9739-fdfa6a8ea8b9"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=485933&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "340645",
              "name": "RNR Biryani - Taste of 1953",
              "cloudinaryImageId": "jhdven0c7dkmypffoigf",
              "locality": "4th B Block",
              "areaName": "Koramangala",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Biryani",
                "South Indian",
                "Kebabs"
              ],
              "avgRating": 4.4,
              "parentId": "11620",
              "avgRatingString": "4.4",
              "totalRatingsString": "8.6K+",
              "sla": {
                "deliveryTime": 9,
                "lastMileTravel": 0.5,
                "serviceability": "SERVICEABLE",
                "slaString": "5-10 mins",
                "lastMileTravelString": "0.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-01-01 00:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "android/static-assets/icons/big_rx.png",
                          "description": "bolt!"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=340645&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
 ]
const Body = () => {
    return (
        <div className="body">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for restaurants and food"
                    className="input-type"
                />
                <button className="search-btn">Search</button>
            </div>
            {/* o,1 karke bahut zyada hojate but nstead we could loop it */}
            <div className="res-container">
                
                {/* <RestaurantCard  resData ={resList[0]} />
                <RestaurantCard  resData ={resList[1]} /> */}
                {/* "ill use map function to loop it" */}
                {/* {not using key is (not acceptable) <<< use index as key <<<<<<<<<<<<< use unique key always} */}
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.card.card.info.id} resData = {restaurant} />
                ))}
           </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};



const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);