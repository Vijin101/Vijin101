import { create } from 'zustand';

export const useBlogStore = create((set) => ({
    blogs: [],
    status: '',
    page: 1,
    limit: 10,
    search: '',
    setBlogs: (blogs) => {
        set({ blogs })
    },
    setStatus: (status) => set({ status }),
    setPage: (page) => set({ page }),
    setLimit: (limit) => set({ limit }),
    setSearch: (search) => set({ search }),
}));


