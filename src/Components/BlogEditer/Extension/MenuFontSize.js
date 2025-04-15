import { Extension } from '@tiptap/core';
import { mergeAttributes } from '@tiptap/react';

export const MenuFontSize = Extension.create({
    name: 'fontSize',

    addOptions() {
        return {
            types: ['textStyle'],
            minSize: 8,      // minimum font size in px
            maxSize: 72,     // maximum font size in px
            step: 2,         // size change step in px
            defaultSize: 16,  // default font size in px
            fontSizes: [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 72] // explicit sizes for dropdown
        };
    },

    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontSize: {
                        default: null,
                        parseHTML: element => {
                            const size = element.style.fontSize;
                            return size ? parseInt(size) : this.options.defaultSize;
                        },
                        renderHTML: attributes => {
                            if (!attributes.fontSize) return {};
                            return { style: `font-size: ${attributes.fontSize}px` };
                        }
                    }
                }
            }
        ];
    },

    addCommands() {
        return {
            setFontSize: fontSize => ({ chain }) => {
                const size = Math.min(
                    Math.max(fontSize, this.options.minSize),
                    this.options.maxSize
                );
                return chain()
                    .setMark('textStyle', { fontSize: size })
                    .run();
            },
            increaseFontSize: () => ({ editor, chain }) => {
                const current = editor.getAttributes('textStyle').fontSize || this.options.defaultSize;
                const next = Math.min(parseInt(current) + this.options.step, this.options.maxSize);
                return chain().setMark('textStyle', { fontSize: next }).run();
            },
            decreaseFontSize: () => ({ editor, chain }) => {
                const current = editor.getAttributes('textStyle').fontSize || this.options.defaultSize;
                const prev = Math.max(parseInt(current) - this.options.step, this.options.minSize);
                return chain().setMark('textStyle', { fontSize: prev }).run();
            },
            resetFontSize: () => ({ chain }) => {
                return chain()
                    .setMark('textStyle', { fontSize: null })
                    .removeEmptyTextStyle()
                    .run();
            }
        };
    }
});