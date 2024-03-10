import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./public/asset/food_app_logo.png";
import resImg from "./public/asset/Biryani_2.avif";

/*
Header
    - Logo 
    - nav menu
body
    - Search
    - Restaurant Container
        - Restaurant cards
Footer
    - Copyright 
    - links 
    - Address
    - Contacts
*/

const HeaderComponent = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={logo} />
        </div>
        <div className="nav-items">
            <ul className="nav">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

// const cardStyle = {
//     backgroundColor: "#f0f0f0",
// };

const res_data = [
    {
        info: {
            id: "690702",
            name: "Pizza Hut",
            cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
            locality: "Karapakkam",
            areaName: "Thoraipakkam",
            costForTwo: "₹350 for two",
            cuisines: ["Pizzas"],
            avgRating: 4.2,
            parentId: "721",
            avgRatingString: "4.2",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 28,
                lastMileTravel: 4.5,
                serviceability: "SERVICEABLE",
                slaString: "28 mins",
                lastMileTravelString: "4.5 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-03-11 01:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹179",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {
            context: "seo-data-ec7b59dd-7e97-4cce-b98f-50eee0dbcace",
        },
        cta: {
            link: "https://www.swiggy.com/restaurants/pizza-hut-karapakkam-thoraipakkam-chennai-690702",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
        info: {
            id: "678545",
            name: "Wow! Momo",
            cloudinaryImageId: "64fd45fd9f44c1737bc446e470bed666",
            locality: "ST. Thomas Mount",
            areaName: "Sholinganallur Signal",
            costForTwo: "₹300 for two",
            cuisines: [
                "Tibetan",
                "Healthy Food",
                "Asian",
                "Chinese",
                "Snacks",
                "Continental",
                "Desserts",
                "Beverages",
            ],
            avgRating: 4.3,
            parentId: "1776",
            avgRatingString: "4.3",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 30,
                lastMileTravel: 2.4,
                serviceability: "SERVICEABLE",
                slaString: "30 mins",
                lastMileTravelString: "2.4 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-03-11 03:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "60% OFF",
                subHeader: "UPTO ₹120",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {
            context: "seo-data-ec7b59dd-7e97-4cce-b98f-50eee0dbcace",
        },
        cta: {
            link: "https://www.swiggy.com/restaurants/wow-momo-st-thomas-mount-sholinganallur-signal-chennai-678545",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
        info: {
            id: "801006",
            name: "BOOM Sandwich - Sub of India",
            cloudinaryImageId: "6257e80653a76966c559e9e4eb8c3c26",
            locality: "Sholinganallur",
            areaName: "Parameswaran Nagar",
            costForTwo: "₹250 for two",
            cuisines: ["Snacks", "Indian", "Desserts"],
            parentId: "401169",
            avgRatingString: "--",
            sla: {
                deliveryTime: 15,
                lastMileTravel: 2.6,
                serviceability: "SERVICEABLE",
                slaString: "10-20 mins",
                lastMileTravelString: "2.6 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-03-11 02:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "50% OFF",
                subHeader: "UPTO ₹100",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {
            context: "seo-data-ec7b59dd-7e97-4cce-b98f-50eee0dbcace",
        },
        cta: {
            link: "https://www.swiggy.com/restaurants/boom-sandwich-sub-of-india-sholinganallur-parameswaran-nagar-chennai-801006",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
        info: {
            id: "64700",
            name: "Ambur Star Briyani",
            cloudinaryImageId: "83650e6ca1465c58063a70ad22be4f28",
            locality: "Sholinganallur",
            areaName: "Sholinganallur",
            costForTwo: "₹500 for two",
            cuisines: ["Indian", "Chinese", "Arabian", "Continental"],
            avgRating: 4.3,
            parentId: "5455",
            avgRatingString: "4.3",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 16,
                lastMileTravel: 2.4,
                serviceability: "SERVICEABLE",
                slaString: "16 mins",
                lastMileTravelString: "2.4 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-03-11 02:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                subHeader: "UPTO ₹80",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {
            context: "seo-data-ec7b59dd-7e97-4cce-b98f-50eee0dbcace",
        },
        cta: {
            link: "https://www.swiggy.com/restaurants/ambur-star-briyani-sholinganallur-chennai-64700",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
        info: {
            id: "558031",
            name: "Geetham Veg restaurant",
            cloudinaryImageId: "fxoofqi1isfil8oa7ix7",
            locality: "OMR-Perungudi",
            areaName: "Thuraipakkam (OMR)",
            costForTwo: "₹450 for two",
            cuisines: ["South Indian", "North Indian", "Sweets", "Beverages"],
            avgRating: 4.6,
            veg: true,
            parentId: "335557",
            avgRatingString: "4.6",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 35,
                lastMileTravel: 5.6,
                serviceability: "SERVICEABLE",
                slaString: "35 mins",
                lastMileTravelString: "5.6 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-03-10 22:45:00",
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId:
                                        "v1695133679/badges/Pure_Veg111.png",
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹299",
                discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {
            context: "seo-data-ec7b59dd-7e97-4cce-b98f-50eee0dbcace",
        },
        cta: {
            link: "https://www.swiggy.com/restaurants/geetham-veg-restaurant-omr-perungudi-thuraipakkam-omr-chennai-558031",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
        info: {
            id: "748065",
            name: "Burger King",
            cloudinaryImageId: "f8d6dce1f40b3e14ff83948a0d0f4b32",
            locality: "OMR Semmanchey",
            areaName: "Kancheepuram",
            costForTwo: "₹350 for two",
            cuisines: ["Burgers", "American"],
            avgRating: 4.3,
            parentId: "166",
            avgRatingString: "4.3",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 24,
                lastMileTravel: 3.9,
                serviceability: "SERVICEABLE",
                slaString: "24 mins",
                lastMileTravelString: "3.9 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-03-11 03:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "60% OFF",
                subHeader: "UPTO ₹120",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {
            context: "seo-data-ec7b59dd-7e97-4cce-b98f-50eee0dbcace",
        },
        cta: {
            link: "https://www.swiggy.com/restaurants/burger-king-omr-semmanchey-kancheepuram-chennai-748065",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
        info: {
            id: "444674",
            name: "Andhra Gunpowder",
            cloudinaryImageId: "o18xlrtaxapi2bq7rpoz",
            locality: "Thoraipakkam",
            areaName: "OMR Perungudi",
            costForTwo: "₹350 for two",
            cuisines: ["Andhra", "Biryani", "South Indian"],
            avgRating: 4.3,
            parentId: "10496",
            avgRatingString: "4.3",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 5.7,
                serviceability: "SERVICEABLE",
                slaString: "25 mins",
                lastMileTravelString: "5.7 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-03-10 23:00:00",
                opened: true,
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available",
                                },
                            },
                        ],
                    },
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹100 OFF",
                subHeader: "ABOVE ₹399",
                discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {
            context: "seo-data-ec7b59dd-7e97-4cce-b98f-50eee0dbcace",
        },
        cta: {
            link: "https://www.swiggy.com/restaurants/andhra-gunpowder-thoraipakkam-omr-perungudi-chennai-444674",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
        info: {
            id: "484181",
            name: "Big Bowl",
            cloudinaryImageId: "c99751d54e4e1847186c62b3309c1327",
            locality: "Mahabalipuram Main Road",
            areaName: "Karapakkam",
            costForTwo: "₹250 for two",
            cuisines: ["North Indian", "Chinese", "Tibetan", "Desserts"],
            avgRating: 3.9,
            parentId: "434792",
            avgRatingString: "3.9",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 20,
                lastMileTravel: 4.2,
                serviceability: "SERVICEABLE",
                slaString: "20 mins",
                lastMileTravelString: "4.2 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-03-11 02:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹169",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {
            context: "seo-data-ec7b59dd-7e97-4cce-b98f-50eee0dbcace",
        },
        cta: {
            link: "https://www.swiggy.com/restaurants/big-bowl-mahabalipuram-main-road-karapakkam-chennai-484181",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
        info: {
            id: "564242",
            name: "KFC",
            cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
            locality: "Rajiv Gandhi Salai",
            areaName: "Sholinganallur",
            costForTwo: "₹400 for two",
            cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
            avgRating: 4.2,
            parentId: "547",
            avgRatingString: "4.2",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 18,
                lastMileTravel: 2.6,
                serviceability: "SERVICEABLE",
                slaString: "18 mins",
                lastMileTravelString: "2.6 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-03-11 00:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                subHeader: "UPTO ₹80",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {
            context: "seo-data-ec7b59dd-7e97-4cce-b98f-50eee0dbcace",
        },
        cta: {
            link: "https://www.swiggy.com/restaurants/kfc-rajiv-gandhi-salai-sholinganallur-chennai-564242",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
];

const RestaurantCardComponent = (props) => {
    const { resData } = props;
    return (
        <div
            className="restaurant-card"
            style={{
                backgroundColor: "#f0f0f0",
                padding: "5px",
            }}
        >
            <img
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    resData.info.cloudinaryImageId
                }
                style={{ width: "100%" }}
            />
            <h3>{resData.info.name}</h3>
            <h5>{resData.info.cuisines.join(", ")}</h5>
            <div>{resData.info.avgRating} star</div>
            <div>{resData.info.sla.deliveryTime} minutes</div>
        </div>
    );
};

const BodyComponent = () => (
    <div className="app-body">
        <div className="search">
            <input type="text" />
            <button type="button" />
        </div>
        <div className="restaraunt-container">
            {res_data.map((data) => {
                return (
                    <RestaurantCardComponent
                        key={data.info.id}
                        resData={data}
                    />
                );
            })}
            {/* <RestaurantCardComponent resData={res_data[0]} />
            <RestaurantCardComponent resData={res_data[1]} />
            <RestaurantCardComponent resData={res_data[2]} />
            <RestaurantCardComponent resData={res_data[3]} /> */}
            {/* <RestaurantCardComponent resname="Aarya Bhavan" /> */}
        </div>
    </div>
);

const AppLayout = () => {
    return (
        <div id="app">
            <HeaderComponent />
            <BodyComponent />
            {/* Header
            body
            footer */}
        </div>
    );
};

const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(<AppLayout />);
