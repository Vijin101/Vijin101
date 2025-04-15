'use client';
import { Box, Button, Stack, Typography } from "@mui/material";
import { useCallback, useRef, useState } from "react";
import {
    LinkBubbleMenu,
    MenuButton,
    RichTextEditor,
    RichTextReadOnly,
    TableBubbleMenu,
    insertImages,
} from "mui-tiptap";
import EditorMenuControls from "./EditorMenuControls";
import useExtensions from "./useExtensions";
import './BlogEditor.css';
import { RiDraftLine } from "react-icons/ri";
import { MdOutlineRateReview, MdPublish } from "react-icons/md";
import { OutlineIconButtonWithLabel, PrimaryButton } from "../Buttons/Button";
import BlogForm from "./BlogForm";
import { useLayout } from "../../context/LayoutContext";
import { createBlogApi } from "../../service/blogService";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import useUploadCoverImage from '../../hooks/useUploadCoverImage';



function fileListToImageFiles(fileList) {
    return Array.from(fileList).filter((file) => {
        const mimeType = (file.type || "").toLowerCase();
        return mimeType.startsWith("image/");
    });
}

// validation submition
function validateSubmission(blog) {
    const { blog_title, blog_content, blog_category, blog_tags, blog_cover } = blog;
    const errors = {};

    if (!blog_title) {
        errors.blog_title = "Blog title is required";
    }
    if (!blog_content) {
        errors.blog_content = "Blog content is required";
    }
    if (!blog_category) {
        errors.blog_category = "Blog category is required";
    }
    if (!blog_tags || blog_tags.length === 0) {
        errors.blog_tags = "At least one blog tag is required";
    }
    if (!blog_cover) {
        errors.blog_cover = "Blog cover image is required";
    }
    return errors;
}

export default function BlogEditor() {
    const router = useRouter();
    const { showNotification } = useLayout();
    const { mutateAsync: uploadCoverImage, isLoading: isCoverUploading } = useUploadCoverImage();
    const extensions = useExtensions({
        placeholder: "Add your own content here...",
    });
    const rteRef = useRef(null);
    const [isEditable, setIsEditable] = useState(true);
    const [showMenuBar, setShowMenuBar] = useState(true);
    const [submittedContent, setSubmittedContent] = useState("");
    const [newBlog, setNewBlog] = useState({
        blog_title: "",
        blog_content: submittedContent || "",
        blog_category: "",
        blog_tags: [],
        blog_cover: "",
    });



    const { mutate: createBlog, isLoading: createLoading } = useMutation({
        mutationFn: createBlogApi, // Function that calls your API to create a blog
        onSuccess: (data) => {
            showNotification('Blog created successfully', 'success');
            router.push('/dashboard/admin/blogs'); // Redirect to blogs page after success
        },
        onError: (error) => {
            showNotification(
                error?.response?.data?.message || 'Failed to create blog',
                'error'
            );
        },
    });

    const handleNewBlog = (blog) => {
        console.log("New blog data:", blog);
        setNewBlog(blog);
    };

    const handleSubmit = async (type = "draft") => {
        try {
            console.log("Submitted blog:", newBlog);

            setSubmittedContent(rteRef.current?.editor?.getHTML() || "");


            // Step 1: Upload cover image if present
            let blog_cover = "";
            if (newBlog?.blog_cover) {
                try {
                    const imageResponse = await uploadCoverImage(newBlog.blog_cover);
                    blog_cover = imageResponse?.data.imageUrl || "";
                } catch (uploadErr) {
                    return; // Error handled already in mutation
                }
            }

            // Step 2: Construct payload
            const payload = {
                ...newBlog,
                blog_cover,
                blog_content: JSON.stringify(rteRef.current?.editor?.getHTML()) || "",
                blog_status: type === "review" ? "1" : type === "draft" ? "3" : "3",
            };

            // Step 3: Validate payload
            const errors = validateSubmission(payload);
            if (Object.keys(errors).length > 0) {
                const firstError = Object.values(errors)[0];
                showNotification(firstError, "error");
                return;
            }


            // Step 4: Submit blog creation request
            createBlog(payload);

            console.log("Payload to send:", payload);
        } catch (error) {
            showNotification("Something went wrong during submission", "error");
            console.error("Submit error:", error);
        }
    };





    const handleNewImageFiles = useCallback((files, insertPosition) => {
        if (!rteRef.current?.editor) {
            return;
        }

        const attributesForImageFiles = files.map((file) => ({
            src: URL.createObjectURL(file),
            alt: file.name,
        }));

        insertImages({
            images: attributesForImageFiles,
            editor: rteRef.current.editor,
            insertPosition,
        });
    }, []);

    const handleDrop = useCallback(
        (view, event, _slice, _moved) => {
            if (!(event instanceof DragEvent) || !event.dataTransfer) {
                return false;
            }

            const imageFiles = fileListToImageFiles(event.dataTransfer.files);
            if (imageFiles.length > 0) {
                const insertPosition = view.posAtCoords({
                    left: event.clientX,
                    top: event.clientY,
                })?.pos;

                handleNewImageFiles(imageFiles, insertPosition);

                event.preventDefault();
                return true;
            }

            return false;
        },
        [handleNewImageFiles]
    );

    const handlePaste = useCallback(
        (_view, event, _slice) => {
            if (!event.clipboardData) {
                return false;
            }

            const pastedImageFiles = fileListToImageFiles(event.clipboardData.files);
            if (pastedImageFiles.length > 0) {
                handleNewImageFiles(pastedImageFiles);
                return true;
            }

            return false;
        },
        [handleNewImageFiles]
    );



    return (
        <>
            <Box>
                <BlogForm blog={newBlog} onSubmit={handleNewBlog} />
            </Box>
            <Box
                className="blog-editor-container"
                sx={{
                    // maxHeight: '500px',
                    // overflow: 'auto',
                    // border: '1px solid #ddd',
                    // borderRadius: '4px',
                    "& .ProseMirror": {
                        "& h1, & h2, & h3, & h4, & h5, & h6": {
                            scrollMarginTop: showMenuBar ? 50 : 0,
                        },
                    },
                }}
            >
                <RichTextEditor
                    immediatelyRender={false}
                    className="blog-editor"
                    ref={rteRef}
                    autofocus={true}
                    extensions={extensions}
                    content={newBlog?.blog_content || ""}
                    editable={isEditable}
                    editorProps={{
                        handleDrop: handleDrop,
                        handlePaste: handlePaste,
                    }}
                    renderControls={() => (
                        <>
                            <EditorMenuControls editor={rteRef.current?.editor} />

                        </>
                    )}
                    RichTextFieldProps={{
                        immediatelyRender: false,
                        className: "blog-editor-field",
                        variant: "outlined",
                        MenuBarProps: {
                            className: "blog-editor-menu-bar",
                            hide: !showMenuBar,
                            sx: {
                                color: "#ffffff",
                                borderBottom: "1px solid #ddd",
                            },
                            PaperProps: {
                                sx: {
                                    backgroundColor: "#f5f5f5",
                                    borderBottom: "1px solid #ddd",
                                },
                            },
                        },
                    }}
                >
                    {() => (
                        <>
                            <LinkBubbleMenu />
                            <TableBubbleMenu />
                        </>
                    )}
                </RichTextEditor>
            </Box>

            <Box mt={2} display="flex" justifyContent="end" gap={2}>
                <OutlineIconButtonWithLabel
                    label={"Save Draft"}
                    size="small"
                    color="secondary"
                    onClick={() => handleSubmit("draft")}
                    icon={<RiDraftLine className="me-2" />}
                />
                <PrimaryButton
                    label={"Publish"}
                    size="small"
                    color="primary"
                    onClick={() => handleSubmit("publish")}
                    icon={<MdPublish className="me-2" />}
                />
                <PrimaryButton
                    label={"Send for Review"}
                    size="small"
                    color="primary"
                    onClick={() => handleSubmit("review")}
                    icon={<MdOutlineRateReview className="me-2" />}
                />

            </Box>

            <Box mt={3}>
                <RichTextReadOnly
                    content={submittedContent}
                    extensions={extensions}
                />
            </Box>
        </>
    );
}