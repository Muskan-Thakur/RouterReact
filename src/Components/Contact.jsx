import React from "react";

function Contact()
{
    return(<div> <div className="elephant">
    <h2 className="lion">Contact Us</h2>
    <form action="/submit_contact" method="post">
        <div style={{textAlign:"center"}}>
            <div className="zebra">
                <div style={{textAlign:"left",marginLeft:"30px"}} ><label for="name">Name:</label></div >
                <input type="text" id="name" name="name" required/>
            </div>
            <div className="zebra">
                <div  style={{textAlign:"left",marginLeft:"30px"}} ><label for="email">Email:</label></div>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="zebra">
               <div  style={{textAlign:"left",marginLeft:"30px"}} > <label for="message">Message:</label></div>
                <textarea id="message" name="message" required></textarea>
            </div>
        </div>
        <button type="submit" className="tiger">Submit</button>
    </form>
</div></div>)
}
export default Contact;