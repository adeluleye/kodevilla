Emails = new Mongo.Collection('emails');

Emails.attachSchema(new SimpleSchema({
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: " "
  },

}));