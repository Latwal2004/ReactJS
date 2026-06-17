{/*Event handler as Props Passing event handler as prop
    means allowing a child component(MenuItem) to trigger a function 
    written in the parent component (Menu)using props.  */}
import { MenuItems } from "./MenuItem"

// Parent Component
export const Menu = () => {

    {    /*
       Function passed to child component as prop

       This handles the order action
       and receives item name + item price
       from child component
    */}
    const handleOrder = (itemName, itemPrice) => {
        alert(`You ordered : ${itemName} for ${itemPrice}`);
    }
    return (
        <div>
            <h2>Our Menu</h2>
            {/* Passing function as prop to child */}
            <MenuItems name="Pizza" price={12} onOrder={handleOrder} />
            <MenuItems name="Burger" price={8.44} onOrder={handleOrder} />
            <MenuItems name="Sald" price={5.39} onOrder={handleOrder} />
        </div>
    )
}