import React from 'react'
import Title from '../Title'

export default function Contact() {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact us"/>
                    <form className="mt-5">
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
                            placeholder="email@email.com"
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
                    </form>
                </div>
            </div>
        </section>
    )
}
