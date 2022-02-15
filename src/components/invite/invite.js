import './invite-styles.css'
import { useState, useEffect } from 'react'

const Invite = () => {

    const url = 'http://localhost:5000/women'
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    
    const sendData = () => {
        if (author.length <= 0 || content.length<=0) {
            alert('You did not fill the forms right. Please, input all the informations')
        }

        const bodyForm = {
            name: author,
            cellphone: content,
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyForm)
        })

        alert(`OK, ${author}, I will call you! `)
    }

   useEffect(async() => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
   }, [])
    

    return(
        <div className='last-box'>
            <div className='box'>
                <div className='title'>
                    <h2>This is me. Do you like?</h2>
                </div>
                <div className='invite'>
                    <div className='call'>
                        <h2>Let's go out for a dinner</h2>
                    </div>
                    <div className='form'>
                        <h5>First of all, what is your name?</h5>
                            <div className="form-floating mb-3">
                                <input type="text" value={author} onChange={(event)=>(setAuthor(event.target.value))} className="form-control opacity-75" id="floatingInput" placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Name</label>
                            </div>
                        <h5>Can I call you by WhatsApp?</h5>
                            <div className="form-floating">
                                <input type="text" value={content} onChange={(event)=>(setContent(event.target.value))} className="form-control opacity-75" id="floatingPassword" placeholder="Password"/>
                                <label htmlFor="floatingPassword">(00)12345-6789</label>
                            </div>
                            <div className='d-grid gap-2 col-6 mx-auto'>
                                <button type="button" onClick={sendData} className="submit btn btn-outline-light">Call me, please!</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Invite