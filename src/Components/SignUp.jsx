import React from "react";

function SignUp()
{
    return(<div className="elephant">
    <h2 className="lion">Signup</h2>
    <form action="/submit_signup" method="post">
       <div  style={{textAlign:"center"}} >
            <div className="zebra">
                <div  style={{textAlign:"left",marginLeft:"30px"}} ><label for="username">Username:</label></div>
                <input type="text" id="username" name="username" required/>
            </div>
            <div className="zebra">
                <div  style={{textAlign:"left",marginLeft:"30px"}} ><label for="email">Email:</label></div>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="zebra">
                <div  style={{textAlign:"left",marginLeft:"30px"}} ><label for="password">Password:</label></div>
                <input type="password" id="password" name="password" required/>
            </div>
       </div>
   <div style={{textAlign:"center"}}>     <button type="submit" className="tiger">Signup</button></div>
    </form>
</div>)
}
export default SignUp;