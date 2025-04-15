import { themeColors } from "../../../config/themeColors";
import { buttonSizes, iconButtonSizes } from "./buttonSizes";

export const getButtonStyles = (size = "medium", color = "primary") => {
    return {
        height: buttonSizes[size].height,
        fontSize: buttonSizes[size].fontSize,
        padding: buttonSizes[size].padding,
        backgroundColor: `${themeColors[color] || themeColors.primary} !important`,
        color: `${themeColors.backgroundLight} !important`,
        transition: "background-color 0.3s !important, transform 0.2s !important",
        "&:hover": {
            backgroundColor: `${themeColors[`${color}Hover`] || themeColors.primaryHover} !important`,
            transform: "scale(1.005) !important",
        },
        "&:active": {
            backgroundColor: `${themeColors[`${color}Active`] || themeColors.primaryActive} !important`,
            transform: "scale(0.95) !important",
        },
        "&.Mui-disabled": {
            backgroundColor: `${themeColors.neutralLight} !important`,
            color: `${themeColors.neutralDark} !important`,
            cursor: "not-allowed !important",
        },
    };
};

export const getOutlineButtonStyles = (size = "medium", color = "secondary") => {
    return {
        height: buttonSizes[size].height,
        fontSize: buttonSizes[size].fontSize,
        padding: buttonSizes[size].padding,
        border: `2px solid ${themeColors[color] || themeColors.secondary} !important`,
        color: `${themeColors[color] || themeColors.secondary} !important`,
        transition: "background-color 0.3s !important, transform 0.2s !important, border-color 0.3s !important",
        backgroundColor: "transparent !important",

        "&:hover": {
            backgroundColor: `${themeColors[`${color}Hover`] || themeColors.accentHover}20 !important`,
            borderColor: `${themeColors[`${color}Hover`] || themeColors.accentHover} !important`,
            transform: "scale(1.005) !important",
        },
        "&:active": {
            backgroundColor: `${themeColors[`${color}Active`] || themeColors.accentActive}30 !important`,
            transform: "scale(0.95) !important",
        },
        "&.Mui-disabled": {
            borderColor: `${themeColors.neutralLight} !important`,
            color: `${themeColors.neutralDark} !important`,
            cursor: "not-allowed !important",
        },
    };
};

export const getIconButtonStyles = (size = "medium", color = "primary") => {
    return {
        height: `${iconButtonSizes[size].height} !important`,
        width: `${iconButtonSizes[size].width} !important`,
        fontSize: `${iconButtonSizes[size].fontSize} !important`,
        padding: `${iconButtonSizes[size].padding} !important`,
        backgroundColor: `${themeColors[color] || themeColors.primary} !important`,
        color: `${themeColors.backgroundLight} !important`,
        transition: "background-color 0.3s !important, transform 0.2s !important",
        "&:hover": {
            backgroundColor: `${themeColors[`${color}Hover`] || themeColors.primaryHover} !important`,
            transform: "scale(1.005) !important",
        },
        "&:active": {
            backgroundColor: `${themeColors[`${color}Active`] || themeColors.primaryActive} !important`,
            transform: "scale(0.95) !important",
        },
    };
};