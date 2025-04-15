import privateApiClient from "./privateApiClient";
import { endpoints } from "../config/apiUrl";
import { decrypt } from "../config/encryption";


// upload blog cover image

export const uploadBlogCoverImageApi = async (data) => {
    try {
        const response = await privateApiClient.post(endpoints.blog.uploadCoverImage, data, {
            headers: {

                'Content-Type': 'multipart/form-data'
            }
        });
        return process.env.NODE_ENV !== 'production' ? response.data : decrypt(response.data.data);
    } catch (error) {
        handleBlogApiError(error, "uploading cover image");
    }
};

// Create blog
export const createBlogApi = async (data) => {
    try {
        const response = await privateApiClient.post(endpoints.blog.createBlog, data);
        return process.env.NODE_ENV !== 'production' ? response.data : decrypt(response.data.data);
    } catch (error) {
        handleBlogApiError(error, "creating blog");
    }
};

// Get all blogs
export const getAllBlogsApi = async (query) => {
    console.log("Query Parameters:", query);
    try {
        const params = new URLSearchParams({
            page: query.page || 1,
            limit: query.limit || 10,

        });


        if (query.search) params.append("search", query.search);
        if (query.user_id) params.append("user_id", query.user_id);
        if (query.status) params.append("status", query.status);

        const response = await privateApiClient.get(`${endpoints.blog.getAllBlogs}?${params.toString()}`);
        return process.env.NODE_ENV !== 'production' ? response.data : decrypt(response.data.data);
    } catch (error) {
        handleBlogApiError(error, "fetching blogs");
    }
};

// Get blog by ID
export const getBlogByIdApi = async (blog_id) => {
    try {
        const response = await privateApiClient.get(`${endpoints.blog.getBlogById(blog_id)}`);
        return process.env.NODE_ENV !== 'production' ? response.data : decrypt(response.data.data);
    } catch (error) {
        handleBlogApiError(error, "fetching blog by ID");
    }
};

// Get all blogs by user ID
export const getAllBlogsByUserIdApi = async (user_id) => {
    try {
        const params = new URLSearchParams({
            page: query.page || 1,
            limit: query.limit || 10,
            search: query.search || '',
            user_id: query.user_id || '',
        });
        const response = await privateApiClient.get(`${endpoints.blog.getAllBlogsByUserId(user_id)}?${params.toString()}`);
        return process.env.NODE_ENV !== 'production' ? response.data : decrypt(response.data.data);
    } catch (error) {
        handleBlogApiError(error, "fetching blogs by user ID");
    }
};

// Update blog
export const updateBlogApi = async ({ blog_id, data }) => {
    try {
        const response = await privateApiClient.put(endpoints.blog.updateBlog(blog_id), data);
        return process.env.NODE_ENV !== 'production' ? response.data : decrypt(response.data.data);
    } catch (error) {
        handleBlogApiError(error, "updating blog");
    }
};

// Delete blog
export const deleteBlogApi = async (blog_id) => {
    try {
        const response = await privateApiClient.delete(endpoints.blog.deleteBlog(blog_id));
        return process.env.NODE_ENV !== 'production' ? response.data : decrypt(response.data.data);
    } catch (error) {
        handleBlogApiError(error, "deleting blog");
    }
};

// Like blog
export const likeBlogApi = async (data) => {
    try {
        const response = await privateApiClient.post(endpoints.blog.likeBlog, data);
        return process.env.NODE_ENV !== 'production' ? response.data : decrypt(response.data.data);
    } catch (error) {
        handleBlogApiError(error, "liking blog");
    }
};

// Get all likes by blog ID
export const getAllLikesByBlogIdApi = async (blog_id) => {
    try {
        const response = await privateApiClient.get(endpoints.blog.getAllLikesByBlogId(blog_id));
        return process.env.NODE_ENV !== 'production' ? response.data : decrypt(response.data.data);
    } catch (error) {
        handleBlogApiError(error, "fetching blog likes");
    }
};

// Comment blog
export const commentBlogApi = async (data) => {
    try {
        const response = await privateApiClient.post(endpoints.blog.commentBlog, data);
        return process.env.NODE_ENV !== 'production' ? response.data : decrypt(response.data.data);
    } catch (error) {
        handleBlogApiError(error, "commenting on blog");
    }
};

// Get all comments by blog ID
export const getAllCommentsByBlogIdApi = async (blog_id) => {
    try {
        const response = await privateApiClient.get(endpoints.blog.getAllCommentsByBlogId(blog_id));
        return process.env.NODE_ENV !== 'production' ? response.data : decrypt(response.data.data);
    } catch (error) {
        handleBlogApiError(error, "fetching blog comments");
    }
};

// Update comment by ID
export const updateCommentByIdApi = async ({ comment_id, data }) => {
    try {
        const response = await privateApiClient.put(endpoints.blog.updateCommentById(comment_id), data);
        return process.env.NODE_ENV !== 'production' ? response.data : decrypt(response.data.data);
    } catch (error) {
        handleBlogApiError(error, "updating comment");
    }
};

// Delete comment by ID
export const deleteCommentByIdApi = async (comment_id) => {
    try {
        const response = await privateApiClient.delete(endpoints.blog.deleteCommentById(comment_id));
        return process.env.NODE_ENV !== 'production' ? response.data : decrypt(response.data.data);
    } catch (error) {
        handleBlogApiError(error, "deleting comment");
    }
};

// Helper to handle errors
const handleBlogApiError = (error, context) => {
    console.error(`Error ${context}`, error);
    if (error.response && error.response.status === 401) {
        throw new Error(error.response?.data?.message || "Unauthorized access - Please login again.");
    } else if (error.response && error.response.status === 500) {
        throw new Error(error.response?.data?.message || "Server error - Please try again later.");
    } else {
        throw new Error(error.response?.data?.message || `An error occurred while ${context}.`);
    }
};
