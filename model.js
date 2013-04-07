//declare collections
Students = new Meteor.Collection("students");
Questions = new Meteor.Collection("questions");

Students.insert({name:"Bobby Sue"});
Questions.insert({question:"What is 2 + 2"});

