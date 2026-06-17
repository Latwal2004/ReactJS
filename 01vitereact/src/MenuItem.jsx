
{/* // Child Component
// Receives name, price, and onOrder function as props*/}
export const MenuItems = ({ name, price, onOrder }) => {
    return (
        <div>
            {/* 
               When button is clicked,
               call parent function (onOrder)
               and pass item name + price
            */}
            <span style={{marginRight:"12px"}}>{name} : Rs.{price}</span>
            
            <button style={{backgroundColor:"green", borderRadius : "5px", color:"#fff"}} onClick={() => onOrder(name, price)}>Order</button>
        </div>
    )
}