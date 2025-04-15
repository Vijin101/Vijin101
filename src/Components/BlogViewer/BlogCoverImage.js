import styles from "./BlogViewer.module.css";

const BlogCoverImage = ({ coverImage, title }) => {
    return (
        <img
            src={coverImage || ""}
            alt={title || ""}
            className={styles.blogImage}
        />
    );
}

export default BlogCoverImage;