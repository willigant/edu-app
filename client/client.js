Meteor.subscribe("all-students");
Meteor.subscribe("all-questions");

Template.quiz.student = function() {
    var student = Students.findOne().name;
    return student;
};

Template.quiz.question = function(){
    var q = Questions.findOne().questions;
    return q;
};

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


