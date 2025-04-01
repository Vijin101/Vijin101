// inputSizes.js
export const inputSizes = {
    small: {
        height: '36px', // Small height
        fontSize: '14px', // Small font size
        padding: '3px 12px', // Small padding
        label: {
            fontSize: '12px', // Smaller font size for label
            transform: 'translate(14px, 9px) scale(1)', // Adjust label position
            '&.MuiInputLabel-shrink': {
                transform: 'translate(14px, -6px) scale(0.75)', // Adjust label position when shrunk
            },
        },
    },
    medium: {
        height: '48px', // Medium height
        fontSize: '16px', // Medium font size
        padding: '12px 16px', // Medium padding
        label: {
            fontSize: '14px', // Medium font size for label
            transform: 'translate(14px, 14px) scale(1)', // Default label position
            '&.MuiInputLabel-shrink': {
                transform: 'translate(14px, -6px) scale(0.75)', // Default label position when shrunk
            },
        },
    },
    large: {
        height: '56px', // Large height
        fontSize: '18px', // Large font size
        padding: '16px 20px', // Large padding
        label: {
            fontSize: '16px', // Large font size for label
            transform: 'translate(14px, 18px) scale(1)', // Adjust label position
            '&.MuiInputLabel-shrink': {
                transform: 'translate(14px, -6px) scale(0.75)', // Adjust label position when shrunk
            },
        },
    },
};



export const textareaSizes = {
    small: {
        height: '80px',
        fontSize: '0.875rem',
        padding: '8px 12px',
        inputPadding: '8px',
        label: {
            fontSize: '0.875rem',
            transform: 'translate(14px, 12px) scale(1)',
            '&.MuiInputLabel-shrink': {
                transform: 'translate(14px, -6px) scale(0.75)',
            },
        },
    },
    medium: {
        height: '120px',
        fontSize: '1rem',
        padding: '12px 16px',
        inputPadding: '12px',
        label: {
            fontSize: '1rem',
            transform: 'translate(14px, 16px) scale(1)',
            '&.MuiInputLabel-shrink': {
                transform: 'translate(14px, -6px) scale(0.75)',
            },
        },
    },
    large: {
        height: '160px',
        fontSize: '1.125rem',
        padding: '16px 20px',
        inputPadding: '16px',
        label: {
            fontSize: '1.125rem',
            transform: 'translate(14px, 20px) scale(1)',
            '&.MuiInputLabel-shrink': {
                transform: 'translate(14px, -6px) scale(0.75)',
            },
        },
    },
};

export const radioSizes = {
    small: {
        padding: '4px',
        label: {
            fontSize: '12px',
        },
        margin: '4px',
    },
    medium: {
        padding: '8px',
        label: {
            fontSize: '14px',
        },
        margin: '8px',
    },
    large: {
        padding: '12px',
        label: {
            fontSize: '16px',
        },
        margin: '12px',
    },
};


export const toggleSwitchSizes = {
    small: {
        width: '40px',
        height: '24px',
    },
    medium: {
        width: '56px',
        height: '32px',
    },
    large: {
        width: '72px',
        height: '40px',
    },
    xlarge: {
        width: '96px',
        height: '48px',
    },
};


export const chipSizes = {
    small: {
        fontSize: '12px',
        padding: '4px 8px',
        height: '24px',
    },
    medium: {
        fontSize: '14px',
        padding: '8px 12px',
        height: '28px',
    },
    large: {
        fontSize: '16px',
        padding: '12px 16px',
        height: '34px',
    },
    xlarge: {
        fontSize: '20px',
        padding: '16px 20px',
        height: '36px',
    },
};