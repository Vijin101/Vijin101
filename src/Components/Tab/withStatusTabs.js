'use client';
import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { themeColors } from '../../config/themeColors';

const getTabSizeStyles = (size) => {
    switch (size) {
        case 'small':
            return {
                fontSize: '0.85rem',
                padding: '4px 8px',
            };
        case 'large':
            return {
                fontSize: '1.15rem',
                padding: '10px 18px',
            };
        case 'medium':
        default:
            return {
                fontSize: '1rem',
                padding: '6px 12px',
            };
    }
};

const withStatusTabs = (
    WrappedComponent,
    tabConfig = [],
    defaultTab = '',
    options = { size: 'medium', color: 'secondary' },
    handleTabChange = () => { }
) => {
    const TabbedComponent = (props) => {
        const [tab, setTab] = useState(defaultTab || tabConfig[0]?.value || '');

        const handleChange = (event, newValue) => {
            console.log(newValue);

            setTab(newValue);
            handleTabChange(newValue)
        };

        const { size = 'medium', color = 'secondary' } = options;
        const selectedColor = themeColors[color] || themeColors.secondary;
        const hoverColor = themeColors[`${color}Hover`] || themeColors.secondaryHover;

        return (
            <Box>
                <Tabs
                    value={tab}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        mb: 3,
                        '& .MuiTabs-indicator': {
                            backgroundColor: selectedColor,
                            height: '3px',
                            borderRadius: '3px',
                        },
                        '& .MuiTab-root': {
                            color: themeColors.textDark,
                            textTransform: 'none',
                            fontWeight: 500,
                            mr: 2,
                            ...getTabSizeStyles(size),
                        },
                        '& .Mui-selected': {
                            color: selectedColor,
                        },
                        '& .MuiTab-root:hover': {
                            color: hoverColor,
                        },
                    }}
                >
                    {tabConfig.map(({ label, value }) => (
                        <Tab key={value} label={label} value={value} />
                    ))}
                </Tabs>

                <WrappedComponent {...props} status={tab} />
            </Box>
        );
    };

    return TabbedComponent;
};

export default withStatusTabs;
