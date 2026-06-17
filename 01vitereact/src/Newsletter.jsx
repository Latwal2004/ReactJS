import { ActionButton } from "./ActionButton";
// Another Parent Component for child actionButton
export const Newsletter = () => {
    const handleSubscribe = () => {
     /*
       Function for newsletter subscription
       Passed to reusable child button component
    */
        alert('Thnaks or Subscribing');
    }

    return (

        <div>
            <h2>Subscribe to Newsletter</h2>
            <ActionButton text="Subscribe" onClick={handleSubscribe} />
        </div>
    )
}
