import { themeColors } from '../../../config/themeColors';
import { inputSizes, textareaSizes, radioSizes, toggleSwitchSizes, chipSizes } from './inputSizes';

export const getInputStyles = (size = 'medium') => ({
    backgroundColor: themeColors.backgroundLight, // Light background
    color: themeColors.textDark + ' !important', // Dark text
    '& .MuiOutlinedInput-root': {
        height: inputSizes[size].height, // Dynamic height
        fontSize: inputSizes[size].fontSize, // Dynamic font size
        padding: inputSizes[size].padding, // Dynamic padding
        '& fieldset': {
            borderColor: themeColors.accentLight, // Light accent border
        },
        '&:hover fieldset': {
            borderColor: themeColors.accent, // Darker accent on hover
        },
        '&.Mui-focused fieldset': {
            borderColor: themeColors.secondary, // Secondary color on focus
        },
    },
    '& .MuiOutlinedInput-input': {
        color: themeColors.textDark
    },
    '& .MuiInputLabel-root': {
        color: themeColors.textDark,
        fontSize: inputSizes[size].label.fontSize, // Dynamic font size for label
        transform: inputSizes[size].label.transform, // Dynamic label position
        '&.Mui-focused': {
            color: themeColors.secondary, // Secondary color on focus
        },
        '&.MuiInputLabel-shrink': {
            transform: inputSizes[size].label['&.MuiInputLabel-shrink'].transform, // Adjust label position when shrunk
        },
    },
});

export const getTextareaStyles = (size = 'medium') => ({
    backgroundColor: themeColors.backgroundLight, // Light background
    color: themeColors.textDark + ' !important', // Dark text
    '& .MuiOutlinedInput-root': {
        fontSize: textareaSizes[size].fontSize, // Dynamic font size
        padding: textareaSizes[size].padding, // Dynamic padding
        '& fieldset': {
            borderColor: themeColors.accentLight, // Light accent border
        },
        '&:hover fieldset': {
            borderColor: themeColors.accent, // Darker accent on hover
        },
        '&.Mui-focused fieldset': {
            borderColor: themeColors.secondary, // Secondary color on focus
        },
    },
    '& .MuiOutlinedInput-input': {
        color: themeColors.textDark, // Text color
        padding: textareaSizes[size].inputPadding, // Dynamic padding for the input area
    },
    '& .MuiInputLabel-root': {
        color: themeColors.textDark, // Label color
        fontSize: textareaSizes[size].label.fontSize, // Dynamic font size for label
        transform: textareaSizes[size].label.transform, // Dynamic label position
        '&.Mui-focused': {
            color: themeColors.secondary, // Secondary color on focus
        },
        '&.MuiInputLabel-shrink': {
            transform: textareaSizes[size].label['&.MuiInputLabel-shrink'].transform, // Adjust label position when shrunk
        },
    },
});


export const getRadioStyles = (size = 'medium') => ({
    '& .MuiRadio-root': {
        padding: radioSizes[size].padding, // Dynamic padding
    },
    '& .MuiFormControlLabel-label': {
        fontSize: radioSizes[size].label.fontSize, // Dynamic font size for label
    },
    '& .MuiFormControlLabel-root': {
        margin: radioSizes[size].margin, // Dynamic margin
    },
    // color of the radio
    '& .MuiRadio-root': {
        color: themeColors.primary, // Secondary color
    },
    // color of the radio when checked
    '& .MuiRadio-root.Mui-checked': {
        color: themeColors.primary, // Secondary color
    },

});

export const getToggleSwitchStyles = (size = 'medium') => ({
    '& .MuiSwitch-root': {
        width: toggleSwitchSizes[size].width, // Dynamic width
        height: toggleSwitchSizes[size].height, // Dynamic height
    },
    '& .MuiSwitch-thumb': {
        color: themeColors.primary, // Secondary color
    },
    '& .MuiSwitch-track': {
        backgroundColor: themeColors.primary, // Secondary color
    },
    '& .MuiSwitch-root.Mui-checked .MuiSwitch-thumb': {
        color: themeColors.primary, // Secondary color
    },
    '& .MuiSwitch-root.Mui-checked + .MuiSwitch-track': {
        backgroundColor: themeColors.primary, // Secondary color
    },


});

export const getChipStyles = (size = 'medium') => ({
    '&.MuiChip-root': {
        fontSize: chipSizes[size].fontSize, // Dynamic font size
        padding: chipSizes[size].padding, // Dynamic padding
        height: chipSizes[size].height, // Dynamic height
    },
    '& .MuiChip-label ': {
        fontSize: chipSizes[size].fontSize, // Dynamic font size
    },
    '& .MuiChip-root.MuiChip-clickable': {
        backgroundColor: themeColors.primary, // Secondary color
    },
    '& .MuiChip-root.MuiChip-clickable:hover': {
        backgroundColor: themeColors.primary, // Secondary color
    },
    '& .MuiChip-root.MuiChip-clickable:focus': {
        backgroundColor: themeColors.primary, // Secondary color
    },
    '& .MuiChip-root.MuiChip-clickable:active': {
        backgroundColor: themeColors.primary, // Secondary color
    },


});

