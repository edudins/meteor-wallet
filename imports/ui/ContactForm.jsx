import React, {useState} from "react"
import {ContactsCollection} from "../api/ContactsCollection";

export const ContactForm = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [imageURL, setImageURL] = useState()
    const saveContact = () => {
        console.log({name, email, imageURL})
        ContactsCollection.insert({name, email, imageURL})
        setName("")
        setEmail("")
        setImageURL("")
    }

    return (
        <form>
            <div>
                <label htmlFor="name">
                    Name:
                </label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    id="name"
                    type="text"/>
            </div>
            <div>
                <label htmlFor="email">
                    Email:
                </label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="name"
                    type="email"/>
            </div>
            <div>
                <label htmlFor="imageURL">
                    ImageURL:
                </label>
                <input
                    onChange={(e) => setImageURL(e.target.value)}
                    value={imageURL}
                    id="imageURL"
                    type="text"/>
            </div>
            <div>
                <button type="button" onClick={saveContact}>Save Contact</button>
            </div>
        </form>
    )
}