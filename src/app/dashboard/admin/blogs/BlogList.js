'use client'
import { Row, Col, Card, Spinner } from 'react-bootstrap';
import BlogCard from '../../../../Components/Cards/BlogCard/BlogCard';
// make sure this is the updated BlogCard component

const BlogList = ({ data = [], isLoading }) => {
    if (isLoading) {
        return (
            <div className="text-center py-5">
                <Spinner animation="border" variant="secondary" />
                <p className="mt-3 text-muted">Loading blog posts...</p>
            </div>
        );
    }

    return (
        <Row>
            {data && data.length > 0 ? (
                data.map((blog) => (
                    <Col key={blog.blog_id} md={6} lg={4} className="mb-4">
                        <BlogCard blog={blog} />
                    </Col>
                ))
            ) : (
                <Col>
                    <Card className="text-center py-5">
                        <Card.Body>
                            <h4 className="text-muted">No blog posts found</h4>
                            <p className="text-muted">Try adjusting your search or filter criteria</p>
                        </Card.Body>
                    </Card>
                </Col>
            )}
        </Row>
    );
};

export default BlogList;
