import React from 'react';
import { Card, CardContent, Typography, Avatar, Box, Rating } from '@mui/material';

const ReviewCard = ({ review }) => {
    return (
        <Card sx={{ 
            height: '100%', 
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'background.default', 
            border: '1px solid rgba(0,0,0,0.05)' 
        }}>
            <CardContent sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 2,
                flexGrow: 1
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: 'primary.main' }}>{review.name[0]}</Avatar>
                    <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                            {review.name}
                        </Typography>
                        <Rating value={review.rating} readOnly size="small" />
                    </Box>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', flexGrow: 1 }}>
                    "{review.comment}"
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ReviewCard;
