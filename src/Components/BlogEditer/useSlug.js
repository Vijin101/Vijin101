// components/BlogEditor/useSlug.js
export const generateSlug = (title) =>
    title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
