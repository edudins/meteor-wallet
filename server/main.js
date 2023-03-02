import { Meteor } from 'meteor/meteor';

Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  if (await LinksCollection.find().countAsync() === 0) {

  }
});
