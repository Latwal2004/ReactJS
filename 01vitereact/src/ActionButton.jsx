

     // Child Component
     // Reusable button component used by multiple parent components
     //     Event handling as props passing
export const ActionButton = ({ text, onClick }) => {
    {/*ths action button is used by two parents contactUs and newletter*/ }
    return <button 
     style={{
                padding: "10px 20px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
            }}
    onClick={onClick}>{text}</button>
               //    onClick function comes from parent component
            //    This helps child component trigger
            //    parent functionality.
}