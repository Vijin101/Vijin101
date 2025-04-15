import { themeColors } from '../../../config/themeColors';
import { inputSizes, textareaSizes, radioSizes, toggleSwitchSizes, chipSizes, checkboxSizes, selectSizes, autocompleteInputSizes } from './inputSizes';

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

export const getCheckboxStyles = (size = "medium") => ({
    "& .MuiSvgIcon-root": {
        fontSize: checkboxSizes[size].iconSize, // Dynamic icon size
        color: themeColors.primary, // Default tick color

    },
    "& .Mui-checked .MuiSvgIcon-root": {
        color: themeColors.secondary // Change only the tick mark color when checked
    },
    "& .Mui-checked": {
        color: themeColors.primary + " !important", // Primary color when checked

    },
    "&:hover .Mui-checked": {
        color: themeColors.secondary + " !important", // Secondary color on hover
    },
    "& .MuiFormControlLabel-label": {
        fontSize: checkboxSizes[size].labelSize, // Dynamic label size
        color: themeColors.textDark,
    },
});

export const getSelectStyles = (size = "medium") => ({
    "& .MuiOutlinedInput-root": {
        height: selectSizes[size].height, // Dynamic height
        fontSize: selectSizes[size].fontSize, // Dynamic font size
        padding: selectSizes[size].padding, // Dynamic padding
    },
    "& .MuiInputLabel-root": {
        color: themeColors.textDark,
        fontSize: selectSizes[size].label.fontSize, // Dynamic font size for label
        transform: selectSizes[size].label.transform, // Dynamic label position
    },
    "& .MuiOutlinedInput-input": {
        color: themeColors.textDark,
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: themeColors.accentLight, // Light accent border
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: themeColors.accent, // Darker accent on hover
    },
    "& .MuiAutocomplete-inputRoot": {
        padding: selectSizes[size].padding, // Dynamic padding
    },
    "& .MuiAutocomplete-input": {
        padding: selectSizes[size].padding, // Dynamic padding
    },
    "& .MuiAutocomplete-option": {
        fontSize: selectSizes[size].option.fontSize, // Dynamic font size for option
    },
    "& .MuiAutocomplete-listbox": {
        fontSize: selectSizes[size].option.fontSize, // Dynamic font size for option
    },
    "& .MuiAutocomplete-option": {
        fontSize: selectSizes[size].option.fontSize, // Dynamic font size for option
    },


});


export const getAutocompleteInputStyles = (size = "medium") => ({
    backgroundColor: themeColors.backgroundLight, // Light background
    color: themeColors.textDark + ' !important', // Dark text
    '& .MuiOutlinedInput-root': {
        height: autocompleteInputSizes[size].height, // Dynamic height
        fontSize: autocompleteInputSizes[size].fontSize, // Dynamic font size
        padding: autocompleteInputSizes[size].padding, // Dynamic padding
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
        fontSize: autocompleteInputSizes[size].label.fontSize, // Dynamic font size for label
        transform: autocompleteInputSizes[size].label.transform, // Dynamic label position
        '&.Mui-focused': {
            color: themeColors.secondary, // Secondary color on focus
        },
        '&.MuiInputLabel-shrink': {
            transform: autocompleteInputSizes[size].label['&.MuiInputLabel-shrink'].transform, // Adjust label position when shrunk
        },
    },
});

