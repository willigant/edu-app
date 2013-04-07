
//publish all students
Meteor.publish("all-students", function(){
    return Students.find({});
})

Meteor.startup(function () {
    // code to run on server at startup
});
