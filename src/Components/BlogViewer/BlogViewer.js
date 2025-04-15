"use client"
import { useQuery } from "@tanstack/react-query";
import BlogContent from "./BlogContent";
import BlogCoverImage from "./BlogCoverImage";
import BlogHeadBar from "./BlogHeadBar";
import BlogTags from "./BlogTags";
import BlogTitle from "./BlogTitle";
import { getBlogByIdApi } from "../../service/blogService";


const BlogViewer = ({ slug }) => {
    console.log(slug);


    const { data, isLoading } = useQuery({
        queryKey: ['blog', slug],
        queryFn: () => getBlogByIdApi(slug),
        enabled: !!slug, // only runs if blog_id is truthy
        refetchInterval: 60 * 60 * 1000, // refetch every hour
    });

    console.log(data);


    const blog = data?.data

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            <BlogTitle title={blog?.blog_title || ""} />
            <BlogHeadBar blog={blog || {}} />
            <BlogCoverImage title={blog.blog_title} coverImage={blog?.blog_cover} />
            <BlogTags category={blog?.blog_category} tags={blog?.blog_tags} />
            <BlogContent content={blog?.blog_content ? JSON?.parse(blog?.blog_content) : ""} />
        </div>
    );
}

export default BlogViewer;