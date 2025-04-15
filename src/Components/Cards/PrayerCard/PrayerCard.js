import {
    Card,
    CardContent,
    Typography,
    Box,
    Stack,
    Button,
    Chip,
    CardActions,
} from '@mui/material';
import { FaUser, FaPhone, FaEnvelope, FaBook, FaEdit, FaTrash } from 'react-icons/fa';

const PrayerCard = ({ prayer, handleEditPrayer, handleDeletePrayer }) => {
    return (
        <Card
            sx={{
                backgroundColor: 'var(--bg-light)',
                borderRadius: 2,
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease !important',
                willChange: 'transform',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                    transform: 'translateY(-5px) !important',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1) !important',
                },
            }}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                <Stack spacing={2}>
                    {/* Header & Badges */}
                    <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 600,
                                color: 'var(--primary-color)',
                                fontFamily: 'var(--font-title)',
                                whiteSpace: 'normal',
                                overflowWrap: 'break-word',
                                hyphens: 'auto',
                            }}
                        >
                            {prayer.subject}
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <Chip
                                label={prayer.status === '1' ? 'Active' : 'Inactive'}
                                size="small"
                                color={prayer.status === '1' ? 'primary' : 'default'}
                            />
                            <Chip
                                label={prayer.publish === '1' ? 'Public' : 'Private'}
                                size="small"
                                color={prayer.publish === '1' ? 'success' : 'error'}
                            />
                        </Stack>
                    </Box>

                    {/* Description */}
                    <Typography variant="body2" sx={{ color: 'var(--text-dark)', lineHeight: 1.5 }}>
                        {prayer.message}
                    </Typography>

                    {/* Details */}
                    <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
                        <Box display="flex" alignItems="center" color="var(--accent-color)" fontSize="0.9rem">
                            <FaUser style={{ marginRight: '0.5rem', color: 'var(--secondary-color)' }} />
                            {prayer.name}
                        </Box>
                        <Box display="flex" alignItems="center" color="var(--accent-color)" fontSize="0.9rem">
                            <FaPhone style={{ marginRight: '0.5rem', color: 'var(--secondary-color)' }} />
                            {prayer.phone_number || 'N/A'}
                        </Box>
                        <Box display="flex" alignItems="center" color="var(--accent-color)" fontSize="0.9rem">
                            <FaEnvelope style={{ marginRight: '0.5rem', color: 'var(--secondary-color)' }} />
                            {prayer.email || "N/A"}
                        </Box>

                    </Box>
                </Stack>
            </CardContent>

            {/* Always at bottom */}
            <CardActions sx={{ mt: 'auto', px: 2, pb: 2, gap: 1 }}>
                <Button
                    variant="outlined"
                    size="small"
                    sx={{
                        flex: 1,
                        fontSize: '0.85rem',
                        color: 'var(--primary-color)',
                        borderColor: 'var(--primary-color)',
                        transition: 'all 0.3s ease !important',
                        willChange: 'transform',
                        '&:hover': {
                            backgroundColor: 'var(--primary-color)',
                            color: 'var(--bg-light)',
                            transform: 'translateY(-2px) !important',
                        },
                    }}
                    startIcon={<FaEdit />}
                    onClick={() => handleEditPrayer(prayer, "edit")}
                >
                    Edit
                </Button>

                <Button
                    variant="outlined"
                    size="small"
                    sx={{
                        flex: 1,
                        fontSize: '0.85rem',
                        color: 'var(--error-color)',
                        borderColor: 'var(--error-color)',
                        transition: 'all 0.3s ease !important',
                        willChange: 'transform',
                        '&:hover': {
                            backgroundColor: 'var(--error-color)',
                            color: 'var(--bg-light)',
                            transform: 'translateY(-2px) !important',
                        },
                    }}
                    startIcon={<FaTrash />}
                    onClick={() => handleDeletePrayer(prayer.request_id)}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

export default PrayerCard;
