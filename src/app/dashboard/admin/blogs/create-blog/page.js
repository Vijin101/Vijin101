import { Container } from "react-bootstrap";
import BlogEditor from "../../../../../Components/BlogEditer/BlogEditor";



const CreateBlog = () => {
    return (
        <Container fluid className="blog-management">
            <BlogEditor />
        </Container>
    );
}

export default CreateBlog;