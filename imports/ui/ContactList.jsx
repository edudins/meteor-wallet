import React from "react"
import {ContactsCollection} from "../api/ContactsCollection"
import {useTracker} from 'meteor/react-meteor-data'

export const ContactList = () => {
    const contacts = useTracker(() => {
        return ContactsCollection.find().fetch() // Tracker - real time tracking system
    })

    return (
        <>
            <h3>Contacts:</h3>
            {contacts.map(contact => (
                <li key={contact.email}>{contact.name} - {contact.email}</li>
            ))}
        </>
    )
}