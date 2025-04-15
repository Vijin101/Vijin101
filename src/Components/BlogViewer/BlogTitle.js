

const BlogTitle = ({ title = "" }) => {
    console.log("tile", title);

    return (
        <h1>{title}</h1>
    );
}

export default BlogTitle;