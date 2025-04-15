import "../../Styles/Blogs/Blogspage.css";
import SidePageContainer from "../../../Components/SidePageContainer/SidePageContainer";
import BlogPost from "./BlogPost";
import { blogs } from "../data";

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.blog_id.toString(), // Ensure slug is string
  }));
}

// Fetch the specific blog post data
async function getBlogPost(slug) {
  return blogs.find((blog) => blog.blog_id.toString() === slug);
}

// Make the page component async
const BlogPostPage = async ({ params }) => {
  console.log(params.slug);

  const post = await getBlogPost(params.slug);
  console.log("Post data:", post); // Log the fetched post data

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="blogs-page">
      <SidePageContainer>
        <BlogPost post={post} /> {/* Better to pass full post data */}
      </SidePageContainer>
    </div>
  );
};

export default BlogPostPage;
