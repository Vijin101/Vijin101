'use client';
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Avatar,
    Typography,
    Chip,
    Button,
    Stack,
} from '@mui/material';
import {
    CalendarMonth as CalendarIcon,
    CommentOutlined,
    FavoriteBorder,
    VisibilityOutlined,
    ArrowForward,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import './BlogCard.css';

const BlogCard = ({ blog }) => {
    const router = useRouter();

    const handleReadMore = () => {
        const slug = blog.blog_id;
        router.push(`/dashboard/admin/blogs/${slug}`);
    };

    return (
        <Card className="h-100 blog-card shadow-sm" sx={{ borderRadius: 3 }}>
            <CardMedia
                component="img"
                height="200"
                image={blog?.blog_cover}
                alt={blog?.blog_title}
                className="blog-card-img"
            />
            <CardContent className="blog-card-body">
                <Stack direction="row" justifyContent="space-between" className="mb-2 blog-card-subcontent">
                    <Typography variant="body2" color="text.secondary">
                        <CalendarIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                        {blog?.blog_published || '01-01-2025'}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Typography variant="body2" color="text.secondary">
                            <CommentOutlined fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.3 }} />
                            {blog?.comment_count || 0}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <FavoriteBorder fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.3 }} />
                            {blog?.like_count || 0}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <VisibilityOutlined fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.3 }} />
                            {blog?.read_count || 0}
                        </Typography>
                    </Stack>
                </Stack>

                {/* Title */}
                <Typography
                    variant="h6"
                    component="h2"
                    className="custom-text-truncate-2 blog-card-title"
                    gutterBottom
                >
                    {blog?.blog_title}
                </Typography>

                {/* Category */}
                {blog?.blog_category && (
                    <Chip
                        label={blog.blog_category}
                        size="small"
                        color="secondary"
                        className="mb-2"
                        sx={{ fontSize: '0.75rem' }}
                    />
                )}

                {/* Description */}
                <Typography
                    variant="body2"
                    color="text.secondary"
                    className="custom-text-truncate-5 blog-card-desc"
                    textAlign="justify"
                >
                    {blog?.blog_excerpt}
                </Typography>

                {/* Tags */}
                {blog?.blog_tags?.length > 0 && (
                    <Stack direction="row" spacing={1} flexWrap="wrap" mt={2}>
                        {blog.blog_tags.map((tag, i) => (
                            <Chip
                                key={i}
                                label={`#${tag}`}
                                size="small"
                                variant="outlined"
                                color="primary"
                                sx={{ fontSize: '0.7rem' }}
                            />
                        ))}
                    </Stack>
                )}
            </CardContent>

            <CardActions
                className="blog-card-footer px-3 py-2"
                sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Avatar
                        src="../../assets/user.jpg"
                        alt="Author"
                        sx={{ width: 30, height: 30, border: '2px solid var(--secondary-color)' }}
                    />
                    <Typography variant="body2" className="blog-card-username">
                        {blog?.blog_author}
                    </Typography>
                </Stack>

                <Button
                    size="small"
                    variant="contained"
                    onClick={handleReadMore}
                    endIcon={<ArrowForward fontSize="small" />}
                    className="blog-card-btn"
                    sx={{
                        backgroundColor: 'var(--secondary-color)',
                        color: 'var(--primary-dark)',
                        '&:hover': {
                            backgroundColor: 'var(--secondary-hover)',
                            transform: 'translateX(5px)',
                        },
                        fontSize: '0.8rem',
                        paddingX: 2,
                    }}
                >
                    Read
                </Button>
            </CardActions>
        </Card>
    );
};

export default BlogCard;
