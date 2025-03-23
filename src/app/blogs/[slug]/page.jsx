import "../../Styles/Blogs/Blogspage.css";
import SidePageContainer from "../../../Components/SidePageContainer/SidePageContainer";
import BlogPost from "./BlogPost";

const BlogPostPage = ({ params }) => {
  return (
    <div className="blogs-page">
      <SidePageContainer>
        <BlogPost slug={params.slug} />
      </SidePageContainer>
    </div>
  );
};

export default BlogPostPage;
