Meteor.subscribe("all-students");

Template.quiz.student = function() {
    var test = Students.findOne().name;
    console.log(JSON.stringify(test));
    return test;
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


