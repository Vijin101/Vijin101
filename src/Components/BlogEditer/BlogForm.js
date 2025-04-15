import { Col, Row } from "react-bootstrap";
import TextInput from "../InputFields/TextInput";
import SelectInput from "../InputFields/SelectInput";
import CustomAutocompleteInput from "../InputFields/CustomAutocompleteInput";
import MultiSelectDropdown from "../InputFields/MultiSelectDropdown";
import { useState } from "react";
import FileInput from "../InputFields/FileInput";

// christian blog tag options
const tagOptions = [
    { value: "Faith", label: "Faith" },
    { value: "Hope", label: "Hope" },
    { value: "Love", label: "Love" },
    { value: "Grace", label: "Grace" },
    { value: "Forgiveness", label: "Forgiveness" },
    { value: "Prayer", label: "Prayer" },
    { value: "Worship", label: "Worship" },
    { value: "Community", label: "Community" },
    { value: "Discipleship", label: "Discipleship" },
    { value: "Service", label: "Service" },
    { value: "Evangelism", label: "Evangelism" },
    { value: "Bible Study", label: "Bible Study" },
    { value: "Fellowship", label: "Fellowship" },
    { value: "Mission", label: "Mission" },
    { value: "Testimony", label: "Testimony" },
    { value: "Spiritual Growth", label: "Spiritual Growth" },
    { value: "Christian Living", label: "Christian Living" },
    { value: "Salvation", label: "Salvation" },
    { value: "Eternal Life", label: "Eternal Life" },
    { value: "Holy Spirit", label: "Holy Spirit" },
    { value: "Scripture", label: "Scripture" },
    { value: "Christianity", label: "Christianity" },
    { value: "Church", label: "Church" },
    { value: "God", label: "God" },
    { value: "Jesus", label: "Jesus" },
    { value: "Bible", label: "Bible" },
    { value: "Joy", label: "Joy" },
    { value: "Peace", label: "Peace" },
    { value: "Kindness", label: "Kindness" },
    { value: "Goodness", label: "Goodness" },
    { value: "Gentleness", label: "Gentleness" },
    { value: "Self-Control", label: "Self-Control" },
    { value: "Patience", label: "Patience" },
    { value: "Perseverance", label: "Perseverance" },
    { value: "Faithfulness", label: "Faithfulness" },
    { value: "Righteousness", label: "Righteousness" },
    { value: "Holiness", label: "Holiness" }
];

const BlogForm = ({ blog, onSubmit }) => {

    const [tags, setTags] = useState(() => {

        if (blog && blog?.blog_tags && blog?.blog_tags.length > 0) {
            return tagOptions.filter((tag) => blog?.blog_tags.includes(tag));
        }
        return []
    })

    const handleTagChange = (selectedTags) => {
        setTags(selectedTags);
        const updatedBlog = { ...blog, blog_tags: selectedTags.map((e) => e.value) };
        onSubmit(updatedBlog);
    }
    return (
        <Row>
            <Col xs={12} md={12} className="mx-auto mb-3">
                <TextInput
                    label="Blog Title"
                    placeholder="Enter blog title"
                    value={blog?.blog_title || ""}
                    onChange={(e) => onSubmit({ ...blog, blog_title: e.target.value })}
                />
            </Col>
            <Col xs={12} md={12} className="mx-auto mb-3">
                <SelectInput
                    label={"Blog Category"}
                    placeholder="Select blog category"
                    value={blog?.blog_category || ""}
                    options={tagOptions}
                    onChange={(e) => onSubmit({ ...blog, blog_category: e.target.value })}
                />
            </Col>
            <Col xs={12} md={12} className="mx-auto mb-3">
                <MultiSelectDropdown
                    label={"Blog Tags"}
                    placeholder="Select blog tags"
                    value={tags || []}
                    options={tagOptions}
                    onChange={handleTagChange}
                />
            </Col>
            <Col xs={12} md={12} className="mx-auto mb-3">
                <FileInput
                    label={"Blog Cover Image"}
                    value={blog?.blog_cover || ""}
                    placeholder="Select blog cover image"
                    onChange={(e) => onSubmit({ ...blog, blog_cover: e.target.files[0] })}
                    accept="image/*"
                    multiple={false}
                />
            </Col>
        </Row>
    );
}


export default BlogForm;