
// src/services/apiConfig.js
// export const API_BASE_URL = "https://church-server-two.vercel.app/api"; // Replace with your API base URL
export const API_BASE_URL = " http://localhost:8000/api"; // Replace with your API base URL

export const DEFAULT_HEADERS = {
    "Content-Type": "application/json",
};

export const endpoints = {
    auth: {
        signup: "/v1/auth/email-signup",
        login: "/v1/auth/email-signin",
        logout: "/v1/auth/logout",
        refresh: "/v1/auth/refresh-token",
        emailVerification: "/v1/auth/email-verification",
        validateToken: "/v1/auth/validate-token",
    },
    user: {
        getProfile: "/v1/user/profile",
        updateProfile: "/v1/user/update-profile",
        getAllUsers: "/v1/user/get-all-users",
        createUser: "/v1/user/create-user",
        updateUser: (id) => `/v1/user/update-user/${id}`,
        deleteUser: (id) => `/v1/user/delete-user/${id}`,
    },
    event: {
        createEvent: "/v1/events/create-event",
        getAllEvents: "/v1/events/get-all-events",
        getEventById: (id) => `/v1/events/get-event/${id}`,
        updateEvent: (id) => `/v1/events/update-event/${id}`,
        deleteEvent: (id) => `/v1/events/delete-event/${id}`,
    },
    prayer: {
        createPrayer: "/v1/prayer/create-prayer-request",
        getAllPrayerRequests: "/v1/prayer/get-all-prayer-requests",
        getPrayerRequestById: (id) => `/v1/prayer/get-prayer-request/${id}`,
        updatePrayerRequest: (id) => `/v1/prayer/update-prayer-request/${id}`,
        deletePrayerRequest: (id) => `/v1/prayer/delete-prayer-request/${id}`,
        sendMailPrayerResponse: (id) => `/v1/prayer/send-mail-prayer-response/${id}`,
    },
    blog: {
        uploadCoverImage: "/v1/blog/upload-blog-cover",
        createBlog: "/v1/blog/create-blog",
        getAllBlogs: "/v1/blog/get-all-blogs",
        getBlogById: (blog_id) => `/v1/blog/get-blog/${blog_id}`,
        getAllBlogsByUserId: (user_id) => `/v1/blog/get-blog/${user_id}`,
        updateBlog: (blog_id) => `/v1/blog/update-blog/${blog_id}`,
        deleteBlog: (blog_id) => `/v1/blog/delete-blog/${blog_id}`,

        likeBlog: "/v1/blog/like-blog",
        getAllLikesByBlogId: (blog_id) => `/v1/blog/get-all-likes-by-blog-id/${blog_id}`,

        commentBlog: "/v1/blog/comment-blog",
        getAllCommentsByBlogId: (blog_id) => `/v1/blog/get-all-comments-by-blog-id/${blog_id}`,
        updateCommentById: (comment_id) => `/v1/blog/update-comment-by-id/${comment_id}`,
        deleteCommentById: (comment_id) => `/v1/blog/delete-comment-by-id/${comment_id}`,
    },
    role: {
        getRoleList: "/v1/roles/get-roles",
    },
    analytics: {
        getUserStatsAnalytics: "/v1/analytics/user-stats",
    },
};
