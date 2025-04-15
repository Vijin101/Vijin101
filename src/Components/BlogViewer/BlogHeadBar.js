"use client";

import {
    Button,
} from "react-bootstrap";
import {

    MdOutlineCalendarMonth,
    MdOutlineComment,
    MdPerson,
    MdShare,
    MdBookmarkBorder,
    MdBookmark,
    MdFavoriteBorder,
    MdFavorite,
    MdVisibility,

} from "react-icons/md";
import { useState } from "react";
import styles from "./BlogViewer.module.css";
import { useAuthStore } from "../../store";

const BlogHeadBar = ({ blog }) => {


    const { user } = useAuthStore()
    const [isLiked, setIsLiked] = useState(() => {

        return blog.liked_user_ids.includes(user?.user_id)

    });

    return (
        <div className={styles.blogHeader}>
            <div className={styles.blogMeta}>
                <div className={styles.metaItem}>
                    <MdOutlineCalendarMonth /> {blog?.blog_published || "01-01-2025"}
                </div>
                <div className={styles.metaItem}>
                    <MdPerson /> {blog?.author_name || "Author Name"}
                </div>
                <div className={styles.metaItem}>
                    <MdOutlineComment /> {blog?.comment_count || 0} Comments
                </div>
                <div className={styles.metaItem}>
                    <MdVisibility /> {blog?.read_count} Reads
                </div>
            </div>
            <div className={styles.blogActions}>

                <Button
                    variant="link"
                    className={styles.actionButton}
                    onClick={() => setIsLiked(!isLiked)}
                >
                    {isLiked ? <MdFavorite /> : <MdFavoriteBorder />}
                </Button>
                <Button variant="link" className={styles.actionButton}>
                    <MdShare />
                </Button>
            </div>
        </div>
    );
}

export default BlogHeadBar;