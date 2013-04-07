//declare collections
Students = new Meteor.Collection("students");
Questions = new Meteor.Collection("questions");

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
