import "../../Styles/Blogs/Blogspage.css";
import SidePageContainer from "../../../Components/SidePageContainer/SidePageContainer";
import BlogPost from "./BlogPost";
import { blogs } from "../data";

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.blog_id,
  }));
}

// Make the page component async
const BlogPostPage = async ({ params }) => {
  return (
    <div className="blogs-page">
      <SidePageContainer>
        <BlogPost slug={params.slug} />
      </SidePageContainer>
    </div>
  );
};

export default BlogPostPage;
