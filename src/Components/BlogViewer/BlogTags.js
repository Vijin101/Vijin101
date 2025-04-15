'use client'

import { Badge } from "react-bootstrap";
import styles from "./BlogViewer.module.css";

const BlogTags = ({ category = null, tags = [] }) => {
    return (
        <div className={styles.blogTags}>
            {category && (
                <Badge bg="" className={`${styles.tag} ${styles.category}`}>
                    {category}
                </Badge>
            )}
            {tags.map((tag, index) => (
                <Badge key={index} bg="" className={styles.tag}>
                    {tag}
                </Badge>
            ))}
        </div>
    );
}

export default BlogTags;
