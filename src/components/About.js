import React from "react";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-hero">
                <div className="hero-content">
                    <h1>Crafting Culinary Experiences</h1>
                    <p>Connecting you to the flavors you love, one delivery at a time.</p>
                    <button className="explore-btn">Discover Our Story</button>
                </div>
                <div className="hero-image">
                    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" alt="Food Delivery" />
                </div>
            </div>

            <div className="about-stats">
                <div className="stat-card">
                    <h2>10M+</h2>
                    <p>Happy Customers</p>
                </div>
                <div className="stat-card">
                    <h2>500+</h2>
                    <p>Cities Covered</p>
                </div>
                <div className="stat-card">
                    <h2>50k+</h2>
                    <p>Restaurant Partners</p>
                </div>
            </div>

            <div className="about-mission">
                <div className="mission-text">
                    <h2>Our Mission</h2>
                    <p>
                        At Hungry Heart, our mission is to elevate the life of every urban consumer by offering unparalleled convenience.
                        Convenience is what makes us tick. It's what gets us out of bed and tells us "Let's do this."
                    </p>
                </div>
                <div className="mission-image">
                    <img src="https://images.unsplash.com/photo-1526367790999-0150786486a9?q=80&w=2071&auto=format&fit=crop" alt="Mission" />
                </div>
            </div>

            <div className="about-vision">
                <div className="vision-image">
                    <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop" alt="Vision" />
                </div>
                <div className="vision-text">
                    <h2>Our Vision</h2>
                    <p>
                        To be the most loved logistics and delivery company in the world.
                        We strive to create a seamless ecosystem where food, groceries, and essential services are just a tap away.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
