import { useQuery } from '@tanstack/react-query';
import { useBlogStore } from '../store';
import { getAllBlogsApi } from '../service/blogService';

const useBlogs = () => {
    const { status, page, limit, search } = useBlogStore();

    const query = useQuery({
        queryKey: ['blogs', search, status, page, limit],
        queryFn: () => getAllBlogsApi({ search, status, page, limit }),
        keepPreviousData: true,
    });

    return query;
};



export default useBlogs;
