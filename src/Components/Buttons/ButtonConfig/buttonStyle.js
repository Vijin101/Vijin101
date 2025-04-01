import { themeColors } from "../../../config/themeColors";
import { buttonSizes, iconButtonSizes } from "./buttonSizes";

export const getButtonStyles = (size = "medium", color = "primary") => {
    return {
        height: buttonSizes[size].height,
        fontSize: buttonSizes[size].fontSize,
        padding: buttonSizes[size].padding,
        backgroundColor: `${themeColors[color] || themeColors.primary} !important`,
        color: themeColors.backgroundLight, // Ensures contrast
        transition: "background-color 0.3s, transform 0.2s",
        "&:hover": {
            backgroundColor: `${themeColors[`${color}Hover`] || themeColors.primaryHover} !important`,
            transform: "scale(1.005)",
        },
        "&:active": {
            backgroundColor: `${themeColors[`${color}Active`] || themeColors.primaryActive} !important`,
            transform: "scale(0.95)",
        },
        "&.Mui-disabled": {
            backgroundColor: `${themeColors.neutralLight} !important`,
            color: `${themeColors.neutralDark} !important`,
            cursor: "not-allowed",
        },
    };
};

export const getOutlineButtonStyles = (size = "medium", color = "secondary") => {
    return {
        height: buttonSizes[size].height,
        fontSize: buttonSizes[size].fontSize,
        padding: buttonSizes[size].padding,
        border: `2px solid ${themeColors[color] || themeColors.secondary}`,
        color: themeColors[color] || themeColors.secondary,
        transition: "background-color 0.3s, transform 0.2s, border-color 0.3s",
        backgroundColor: "transparent",

        "&:hover": {
            backgroundColor: `${themeColors[`${color}Hover`] || themeColors.accentHover}20`,
            borderColor: themeColors[`${color}Hover`] || themeColors.accentHover,
            transform: "scale(1.005)",
        },
        "&:active": {
            backgroundColor: `${themeColors[`${color}Active`] || themeColors.accentActive}30`,
            transform: "scale(0.95)",
        },
        "&.Mui-disabled": {
            borderColor: themeColors.neutralLight,
            color: themeColors.neutralDark,
            cursor: "not-allowed",
        },
    };
};

export const getIconButtonStyles = (size = "medium", color = "primary") => {
    return {
        height: iconButtonSizes[size].height,
        width: iconButtonSizes[size].width,
        fontSize: iconButtonSizes[size].fontSize,
        padding: iconButtonSizes[size].padding,
        backgroundColor: `${themeColors[color] || themeColors.primary} !important`,
        color: themeColors.backgroundLight,
        transition: "background-color 0.3s, transform 0.2s",
        "&:hover": {
            backgroundColor: `${themeColors[`${color}Hover`] || themeColors.primaryHover} !important`,
            transform: "scale(1.005)",
        },
        "&:active": {
            backgroundColor: `${themeColors[`${color}Active`] || themeColors.primaryActive} !important`,
            transform: "scale(0.95)",
        },
    };
};  