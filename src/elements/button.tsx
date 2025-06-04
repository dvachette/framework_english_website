import { useState } from "react";

interface ButtonProps {
    label: string;
    onclick: () => void;
    iconPath:string,
    id?: string;
}
function Button({ label, onclick, iconPath, id}: ButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <button id={id} onClick={onclick} className="Button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovered ? <p> {label} </p> : null}
            <img src={iconPath} alt="icon" className="ButtonIcon" /> 
        </button>
    );
}

export default Button;