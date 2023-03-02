import React from 'react'

// Contact: name, email, imageURL
export const App = () => (
    <div>
        <h1>My Wallet</h1>
        <form>
            <div>
                <label htmlFor="name">
                    Name:
                </label>
                <input id="name" type="text"/>
            </div>
            <div>
                <label htmlFor="email">
                    Email:
                </label>
                <input id="name" type="email"/>
            </div>
            <div>
                <label htmlFor="imageURL">
                    ImageURL:
                </label>
                <input id="imageURL" type="text"/>
            </div>
            <div>
                <button>Save Contact</button>
            </div>
        </form>
    </div>
)
