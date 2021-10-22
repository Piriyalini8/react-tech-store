import React from 'react'
import Title from '../Title'

export default function Contact() {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact us"/>
                    <form className="mt-5" action="https://formspree.io/f/xwkajvbz" method="POST">
                        {/* first */}
                        <div >
                            <input 
                            type="text"
                            name="firstName" 
                            className="form-control"
                            placeholder="Priyalini"
                            />
                        </div>
                        <br/>
                        {/* email */}
                        <div >
                            <input 
                            type="email"
                            name="email" 
                            className="form-control"
                            placeholder="email@gmail.com"
                            />
                        </div>
                        <br/>
                        {/* subject */}
                        <div >
                            <input 
                            type="text"
                            name="subject" 
                            className="form-control"
                            placeholder="important!!!!"
                            />
                        </div>
                        <br/>
                        {/* message */}
                        <div className="form-group">
                            <textarea 
                            name="message" 
                            className="form-control"
                            rows="10"
                            placeholder="hello there buddy">

                            </textarea>
                        </div>
                        <br/>
                        {/* submit */}
                        <div className="form-group mt-3">
                            <input 
                            type="submit" 
                            value="Send"
                            className="form-control bg-primary text-white"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
