import { useState } from 'react';
import RichTextEditor, { ToolbarConfig } from 'react-rte';

export type RTEditorProps = {
    onChange?: (value: string) => void;
};

export const RTEditor = ({ onChange, ...props }: RTEditorProps) => {
    const [value, setValue] = useState(RichTextEditor.createEmptyValue());
    const toolbarConfig = {
        display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
        INLINE_STYLE_BUTTONS: [
            { label: 'Bold', style: 'BOLD' },
            { label: 'Italic', style: 'ITALIC' },
            { label: 'Strikethrough', style: 'STRIKETHROUGH' },
            { label: 'Underline', style: 'UNDERLINE' }
        ],
        BLOCK_TYPE_DROPDOWN: [
            { label: 'Normal', style: 'unstyled' },
            { label: 'Heading Large', style: 'header-one' },
            { label: 'Heading Medium', style: 'header-two' },
            { label: 'Heading Small', style: 'header-three' }
        ],
        BLOCK_TYPE_BUTTONS: [
            { label: 'UL', style: 'unordered-list-item' },
            { label: 'OL', style: 'ordered-list-item' }
        ]
    } as ToolbarConfig;
    return (
        <RichTextEditor
            className='w-full h-full'
            value={value}
            editorClassName='font-sans px-4'
            toolbarConfig={toolbarConfig}
            onChange={
                (newValue) => {
                    setValue(newValue);
                    if (onChange) {
                        onChange(newValue.toString('html'));
                    }
                }
            }
            {...props}
        />
    );
};