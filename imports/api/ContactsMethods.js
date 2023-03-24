import {ContactsCollection} from "./ContactsCollection";

Meteor.methods({
    'contacts.insert'({name, email, imageURL}) {
        return ContactsCollection.insert({name, email, imageURL})
    }
})
