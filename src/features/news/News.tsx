import styles from "./News.module.scss";

import React from "react";
import Article from "../../components/article/Article";

// Imagine that this data is fetched from the server :D
const articles = [
    {
        title: "Marine Mammals: Exploring the Depths",
        description: "Discover the captivating world of marine mammals and their vital role in ocean ecosystems. Explore their unique adaptations and behaviors through an enchanting journey beneath the waves.",
        publishedAt: "2023-07-21"
    },
    {
        title: "Unraveling Insect Societies",
        description: "Delve into the hidden lives of insects and gain insights into their fascinating behavior and survival strategies. From ant colonies to butterfly metamorphosis, uncover the secrets of these remarkable creatures.",
        publishedAt: "2023-07-20"
    },
    {
        title: "The Wonders of Avian Migration",
        description: "Embark on a thrilling odyssey as you observe the annual migration of millions of birds across the globe. Explore how these incredible animals navigate and survive on their long and perilous journey.",
        publishedAt: "2023-07-19"
    }
]

const News: React.FC = () => {
    return (
        <div className="page main-page">
            <h1>Recent news</h1>
            <div className={styles.articles}>
                {articles.map((article) => (
                    <Article {...article}/>
                ))}
            </div>
        </div>
    )
}

export default News;
