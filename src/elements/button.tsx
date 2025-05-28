import { useState } from "react";

interface ButtonProps {
    label: string;
    onclick: () => void;
    iconPath:string
}
function Button({ label, onclick, iconPath }: ButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <button onClick={onclick} className="Button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovered ? <p> {label} </p> : null}
            <img src={iconPath} alt="icon" className="ButtonIcon" /> 
        </button>
    );
}


export default Button;