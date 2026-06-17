import { ActionButton } from './ActionButton'
 {/*Parent Component*/}
export const Contact = () => {

    
    /*
       Function created inside parent
       This function is passed to child component
       as a prop and gets triggered on button click
    */
    const handleSendMessage = () =>
        {
            alert('Sending Messge');
        }
    return (
        <div>
            <h2>Contact Us</h2>
            <ActionButton text="send Message"  onClick = {handleSendMessage} />
        </div>

    )
} 