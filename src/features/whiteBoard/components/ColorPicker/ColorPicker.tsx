import { useRef } from 'react';
import { ColorPickerS, ColorLabelS } from './ColorPicker.styled.js';

function ColorPicker({ size = 34, color, onChange = (e) => { } }: {
    size?: number;
    color: string;
    onChange: (color: string, e: any) => void;
}) {
    const inputRef = useRef<HTMLInputElement>(null);

    const emitClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    return (
        <ColorPickerS size={size} onClick={emitClick}>
            <ColorLabelS size={size} color={color}></ColorLabelS>
            <input
                ref={inputRef}
                style={{ opacity: 0, position: 'absolute', bottom: '-1px', width: '1px', height: '1px' }}
                type="color"
                name="color"
                id="color"
                onChange={(e) => onChange(e.target.value, e)}
            />
        </ColorPickerS>
    );
}

export default ColorPicker;