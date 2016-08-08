/*
This is empty on purpose! Your code to build the resume will go here.
*/

/*var awesomeThoughts = "I am Hieu and I am AWESOME!"
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")
$("#main").append(funThoughts)*/

var skills = ["Python", "Flask", "Java"];

var bio = {
    "name" : "Trung Hieu",
    "role": "Full Stack Developer",
    "contacts": {
        "location": "Ho Chi Minh City"

    },
    "welcomeMessage" : "Hello Guys",
    "skills" : ["Python", "Flask", "Java"]
};


var work = {
    "jobs": [
    {
        "employer": "VNG",
        "title": "Java InterShip",
        "location": "Ho Chi Minh",
        "dates": "2015-2016",
        "description": "Hello"
    },
    {
        "employer": "GCB",
        "title": "Python InterShip",
        "location": "Ho Chi Minh",
        "dates": "2014-2016",
        "description": "Goodbye"
    }
    ]
};


var education = {
    "schools" : [
    {
        "name": "UIT",
        "year": "2012-2017",
        "location": "Ho Chi Minh"
    },
    {
        "name": "Chuyen Quang Binh",
        "year": "2009-2012",
        "location": "Quang Binh"
    }],

    "certificate": "Full Stack Developer"
};


var projects = {
    "projects": [{
        "title": "Blog",
        "dates": "3/2016 4/2016",
        "description": "Team is 1",
        "image": "https://placehold.it/350x150"
    }]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name)
var formattedRole = HTMLheaderRole.replace("%data%", bio.role)

$("#header").append(formattedName)
$("#header").append(formattedRole)

if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);

    for (i in bio.skills){
        var formatedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formatedSkill);
    }
};

work.display = function(){
    if(work.jobs.length > 0){

        for(j in work.jobs){
            $("#workExperience").append(HTMLworkStart);

            var formatedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
            var formatedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
            var formatedDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
            var formatedLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
            var formatedDescription = HTMLworkDescription.replace("%data%", work.jobs[j].description);

            $(".work-entry:last").append(formatedEmployer + formatedTitle);
            $(".work-entry:last").append(formatedLocation);
            $(".work-entry:last").append(formatedDates);
            $(".work-entry:last").append(formatedDescription);
        }

    }
}

work.display()

projects.display = function(){
    if(projects.projects.length > 0){

        for (p in projects.projects){
            $("#projects").append(HTMLprojectStart)

            var formatedTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
            var formatedDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
            var formatedDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
            var formatedImage = HTMLprojectImage.replace("%data%", projects.projects[p].image);

            $(".project-entry:last").append(formatedTitle);
            $(".project-entry:last").append(formatedDates);
            $(".project-entry:last").append(formatedDescription);
            $(".project-entry:last").append(formatedImage);
        }
    }
}

projects.display()

function inName(oldName){
    var finalName = oldName;
    // Your code goes here!
    var temp = finalName.split(" ")
    temp[0] = temp[0][0].toUpperCase() + temp[0].slice(1).toLowerCase()
    temp[1] = temp[1].toUpperCase()
    finalName = temp[0] + " " + temp[1]


    // Don't delete this line!
    return finalName;
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);