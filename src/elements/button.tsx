interface ButtonProps {
    label: string;
    onclick: () => void;
    iconPath:string,
    id?: string;
}
function Button({ label, onclick, iconPath, id}: ButtonProps) {
    return (
        <button id={id} onClick={onclick} className="Button">
            <span className="ButtonLabel">{label}</span>
            <img src={iconPath} alt="icon" className="ButtonIcon" /> 
        </button>
    );
}

export default Button;