import React from 'react'
import './colorCard.css'

interface ColorCardProps {
    hue?: Number
    lightness?: Number
    length?: Number | undefined | null
}

export const ColorCard: React.FC<ColorCardProps> = ({hue, lightness, length}) => {
        return (
            <>
                <div className='inner' style={{backgroundColor:`hsl(${hue}, 100%, ${lightness}%)`}}></div>
            </>
        );
}