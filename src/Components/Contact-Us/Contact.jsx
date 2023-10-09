import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <section>
        <div className="contact">
            <h1>Contact Us</h1>
            <form action="">
                <div className="group-inpt">
                    <div className="inpt">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Your name .......' />
                    </div>
                    <div className="inpt">
                        <label htmlFor="">Prenom</label>
                        <input type="text" placeholder='Your prenom .......' />
                    </div>
                </div>
                <div className="group-inpt">
                    <div className="inpt">
                        <label htmlFor="">Phone</label>
                        <input type="text" placeholder='Your phone .......' />
                    </div>
                    <div className="inpt">
                        <label htmlFor="">City</label>
                        <input type="text" placeholder='Your city .......' />
                    </div>
                </div>
                <div className="textarea">
                    <textarea name="" id="" cols="30" rows="10" placeholder='Your message'>Message</textarea>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact