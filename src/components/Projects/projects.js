import React from "react";
import './projects.css';
import p1 from '../../../../my-react-app/src/assets/img2.png';
import p2 from '../../../../my-react-app/src/assets/img3.png';
import p3 from '../../../../my-react-app/src/assets/img4.png';

const projects = () => {
    return (
        <section id="portfolio">
            <div id="portfolioContent">
                <h1 className="portfolioTitle">My Portfolio</h1>

                <div className="portfolioLinks">
                    <div className="portfolioItem">
                        <a href="https://github.com/Fiona-star1/ReceiptWebsite">
                            <img src= {p1} alt="Portfolio Item 1" />
                            Portfolio Item 1
                        </a>
                        <p>Description for Portfolio Item 1.</p>
                    </div>

                    <div className="portfolioItem">
                        <a href="https://github.com/Fiona-star1/DiceRollingWebSite">
                            <img src={p2} alt="Portfolio Item 2" />
                            Portfolio Item 2
                        </a>
                        <p>Description for Portfolio Item 2.</p>
                    </div>

                    <div className="portfolioItem">
                        <a href="https://github.com/Fiona-star1/MakeUPWebSite">
                            <img src={p3} alt="Portfolio Item 3" />
                            Portfolio Item 3
                        </a>
                        <p>Description for Portfolio Item 3.</p>
                    </div>
                </div>

                <p className="portfolioDescription">
                    This is a collection of my work showcasing various projects and achievements. Feel free to explore the links above to learn more about each portfolio item.
                </p>
            </div>
        </section>
    )
}

export default projects;