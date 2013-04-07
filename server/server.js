//declare collections
Students = new Meteor.Collection("students");
Questions = new Meteor.Collection("questions");

Students.insert({name:"Bobby Sue"});
Questions.insert({question:"What is 2 + 2"});

//publish all students
Meteor.publish("all-students", function(){
    return Students.find();
})

Meteor.startup(function () {
    // code to run on server at startup
});
