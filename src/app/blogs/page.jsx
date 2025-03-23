import "../Styles/Blogs/Blogspage.css";
import SidePageContainer from "../../Components/SidePageContainer/SidePageContainer";
import PageWrapper from "./PageWrapper";

const BlogsPage = () => {
    return (
        <div className="blogs-page">
            <SidePageContainer>
                <PageWrapper />
            </SidePageContainer>
        </div>
    );
};

export default BlogsPage;