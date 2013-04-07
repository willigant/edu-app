//declare collections
Students = new Meteor.Collection("students");
Questions = new Meteor.Collection("questions");

Students.insert({name:"Bobby Sue"});
Questions.insert({
    questions:[
        "What's my name again",
        "Why doesn't this work?",
        "Why is this the worst quiz ever",
        "This is why I'm hot"
    ]
})
