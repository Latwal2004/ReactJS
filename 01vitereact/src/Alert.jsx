{/*CSS STYLINGS*/}
import './Alert.css';

export const Alert = ({ children,type = "success" }) => {
{  /*  inline styling*/}
    // return <div style={{
    //     backgroundColor: type === "success" ? "#10b981" :"red",
    //     color: type === "success" ? "black" : "white",
    //     padding: "16px",
    //     borderRadius: "8px",
    //     marginBottom: "16px",
    //     textAlign:"center"
    // }}>
    //     {children}</div>

    {/*external css*/}
    return <div className= {`alert ${type}`}> {children} </div>
}