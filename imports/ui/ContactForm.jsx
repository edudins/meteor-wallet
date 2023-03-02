import React, {useState} from "react"

export const ContactForm = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [imageURL, setImageURL] = useState()
    const saveContact = () => {
        console.log({name, email, imageURL})
    }

    return (
        <form>
            <div>
                <label htmlFor="name">
                    Name:
                </label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    type="text"/>
            </div>
            <div>
                <label htmlFor="email">
                    Email:
                </label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    id="name"
                    type="email"/>
            </div>
            <div>
                <label htmlFor="imageURL">
                    ImageURL:
                </label>
                <input
                    onChange={(e) => setImageURL(e.target.value)}
                    id="imageURL"
                    type="text"/>
            </div>
            <div>
                <button type="button" onClick={saveContact}>Save Contact</button>
            </div>
        </form>
    )
}