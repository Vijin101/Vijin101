'use client';
import { Box } from "@mui/material";
import { RichTextReadOnly } from "mui-tiptap";
import useExtensions from "../BlogEditer/useExtensions";


const BlogContent = ({ content }) => {
    const extensions = useExtensions({
        placeholder: "Add your own content here...",
    });
    return (
        <Box mt={3}>
            <RichTextReadOnly
                content={content}
                extensions={extensions}
            />
        </Box>
    );
}

export default BlogContent;