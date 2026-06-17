export const  ColorSwitch = ({ onchangeColor}) =>{
    return (
        <button onClick={e=>{
            e.stopPropagation();
            onchangeColor();
        }}>
                Chnage Color
        </button>
    )
}