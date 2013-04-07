//declare collections
Students = new Meteor.Collection("students");
Questions = new Meteor.Collection("questions");


if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "This is a simple version of an Education App For Travis";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
