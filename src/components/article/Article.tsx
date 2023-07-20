import styles from "./Article.module.scss";
import React from "react";

type ArticleProps = {
    title: string;
    description: string;
    publishedAt: string;
}

const Article: React.FC<ArticleProps> = ({title, description, publishedAt}: ArticleProps) => {
    return (
        <article className={styles.article}>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <p>{publishedAt}</p>
        </article>
    )
}

export default Article;
