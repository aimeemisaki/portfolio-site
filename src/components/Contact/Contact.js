import React from "react";


const Contact = () => {

    return (
        <div>
            <div className="vertical contact-container">
                <p className="text-center text-white contact-text ">Contact Me</p>
                <form action="/action_page.php">
                    <input type="text" id="fname"name="firstname"placeholder="FIRST NAME"/>
                    <input type="text" id="lname" name="lastname" placeholder="LAST NAME"/>
                    <label>EMAIL</label>
                    <input type="email" 
                        id="email"
                        name="email"
                        placeholder="youraddress@email.com"/>
                    <label>MESSAGE</label>
                    <textarea 
                        id="subject"
                        name="subject"
                        placeholder=''>
                    </textarea>
                    <div className="input-container">
                        <input type="submit"value="SEND" className="header-text"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact