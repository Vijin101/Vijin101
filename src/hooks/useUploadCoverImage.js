import { useMutation } from '@tanstack/react-query';
import { uploadBlogCoverImageApi } from '../service/blogService'; // Adjust path if needed
import { useLayout } from '../context/LayoutContext'; // Replace with your actual notification util

const useUploadCoverImage = () => {

    const { showNotification } = useLayout()
    return useMutation({
        mutationFn: (file) => {
            const formData = new FormData();
            formData.append("image", file);
            console.log(11111111111, file)
            return uploadBlogCoverImageApi(formData);
        },
        onError: (error) => {
            showNotification(
                error?.response?.data?.message || "Failed to upload blog cover image",
                "error"
            );
        },
    });
};

export default useUploadCoverImage;
