import React, {useState} from "react"
import {Meteor} from "meteor/meteor"
import {ErrorAlert} from "./components/ErrorAlert"
import {SuccessAlert} from "./components/SuccessAlert"

export const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [error, setError] = React.useState("")
    const [success, setSuccess] = React.useState("")

    const showError = ({message}) => {
        setError(message)
        setTimeout(() => {
            setError("")
        }, 5000)
    }

    const showSuccess = ({message}) => {
        setSuccess(message)
        setTimeout(() => {
            setSuccess("")
        }, 5000)
    }

    const saveContact = () => {
        Meteor.call('contacts.insert', {name, email, imageURL}, (errorResponse) => {
            if (errorResponse) {
                showError({message: errorResponse.error})
            } else {
                showSuccess({message: "Contact added."})
                setName("")
                setEmail("")
                setImageURL("")
            }
        })
    }

    return (
        <form className="mt-6 px-64">
            {success && <SuccessAlert message={success}/>}
            {error && <ErrorAlert message={error}/>}
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Name:
                    </label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        id="name"
                        type="text"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email:
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        id="name"
                        type="email"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label htmlFor="imageURL" className="block text-sm font-medium leading-6 text-gray-900">
                        ImageURL:
                    </label>
                    <input
                        onChange={(e) => setImageURL(e.target.value)}
                        value={imageURL}
                        id="imageURL"
                        type="text"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <button
                        type="button"
                        onClick={saveContact}
                        className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                    >
                        Save Contact
                    </button>
                </div>
            </div>
        </form>
    )
}