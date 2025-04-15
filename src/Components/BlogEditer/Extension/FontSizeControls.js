import React from 'react';
import { IconButton, Stack, Select, MenuItem, Typography } from '@mui/material';
import { MenuButton, MenuSelect } from 'mui-tiptap';
import { MdTextIncrease, MdTextDecrease } from "react-icons/md";

export const FontSizeControls = ({ editor }) => {
    if (!editor) return null;

    const fontSizeExt = editor.extensionManager.extensions.find(ext => ext.name === 'fontSize');
    if (!fontSizeExt) return null;

    const defaultFontSizes = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 72];
    const fontSizes = fontSizeExt.options?.fontSizes || defaultFontSizes;
    const currentSize = editor.getAttributes('textStyle').fontSize || fontSizeExt.options?.defaultSize || 16;

    // Fixed event handling
    const handleChange = (event) => {
        try {
            const size = parseInt(event.target.value);
            if (!isNaN(size)) {
                editor.chain().focus().setFontSize(size).run();
            }
        } catch (error) {
            console.error('Error handling font size change:', error);
        }
    };

    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            <MenuSelect
                value={currentSize}
                onChange={handleChange}
                size="small"
                tooltipTitle='Font Size'
            >
                {fontSizes.map(size => (
                    <MenuItem key={size} value={size}>
                        {size}px
                    </MenuItem>
                ))}
            </MenuSelect>
            <MenuButton
                value="fontSize"
                tooltipLabel={"Decrease font size"}
                size="small"
                onClick={() => editor.chain().focus().decreaseFontSize().run()}
                disabled={parseInt(currentSize) <= (fontSizeExt.options?.minSize || 8)}

                IconComponent={MdTextDecrease}
            />
            <MenuButton
                value="fontSize"
                tooltipLabel={"Increase font size"}
                size="small"
                onClick={() => editor.chain().focus().increaseFontSize().run()}
                disabled={parseInt(currentSize) >= (fontSizeExt.options?.maxSize || 72)}
                IconComponent={MdTextIncrease}
            />
        </Stack>
    );
};