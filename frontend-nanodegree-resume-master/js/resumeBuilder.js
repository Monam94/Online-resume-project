/*
This is empty on purpose! Your code to build the resume will go here.
 */

//Bio
var bio = {
    "name": "Mona Maher",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "201114169989",
        "email": "monam0750@gmail.com",
        "github": "Monam94",
        "location": "Egypt"  
    },
    "welcomeMessage": "I'm Mona Maher Mostafa , front-end web developer, I'm graduated from faculty of computers and informatics, I plan to finish the Front-End Nanodegree at Udacity",
    "skills": ["HTML5", "CSS3", "Javascript", "Bootstrap", "C#" ],
    "bioPic": "images/m.jpg"
};


bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedImage);
    $("#header").prepend(formattedMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    
    if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile,formattedEmail, formattedGithub, formattedLocation);
    $("#footerContacts").append(formattedMobile,formattedEmail, formattedGithub, formattedLocation);
};

//work
   var work = {
    "jobs": [{
        "employer": "front-end developer",
        "title": "Front-End Web Development ",
        "dates": "2016",
        "location": "Egypt",
        "description": "Tasks include converting psd designs to HTML/CSS."
    }]
};


work.display = function() {
    for( job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedLocation, formattedDescription);
    }
};



//Projects
var projects = {
    "projects": [{
        "title": "Voice Commander for Graduatation Project",
        "dates": "2016",
        "description": "How to control some commands of OS by voice",
        "images": ["images/1.jpg", "images/2.png", "images/3.jpg"]
    }, {
        "title": "My Folio",
        "dates": "2016",
        "description": "How to conert a psd design into HTML5 and CSS3",
        "images": ["images/4.jpg","images/5.jpg","images/6.jpg"]
    }, {
        "title": "Build a Portfolio project",
        "dates": "2017",
        "description": "Responsive portfolio",
        "images": ["images/MY portfolio.png"]
    }]
};

projects.display = function() {
    for ( item in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
        for (var image in projects.projects[item].images) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[item].images[image]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};


///Education

var education = {
    "schools": [{
        "name": "Fresh Graduated",
        "location": "Benha University , Egypt",
        "degree": "B.S",
        "major": ["Computer Science"],
        "dates": "2012-2016",
        "url": "http://www.fci.bu.edu.eg/fci/en/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016-2017",
        "url": "https://www.udacity.com/nanodegree"
    }, {
        "title": "The Complete Web Developer Masterclass",
        "school": "Udemy",
        "dates": "2016-2017",
        "url": "https://www.udemy.com/webdevelopercourse"
    }]
};

education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
    }
    
    if (education["onlineCourses"].length !== 0) {
        $("#education").append(HTMLonlineClasses);
    }
    for (var course in education["onlineCourses"]) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education["onlineCourses"][course].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education["onlineCourses"][course].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education["onlineCourses"][course].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", education["onlineCourses"][course].url);
        $(".education-entry:last").append(formattedTitle + formattedSchool, formattedDates, formattedURL);
    }
};


bio.display();
work.display();
projects.display();
education.display();



$(document).click(function(loc) { 
	var x = event.pageX;
	var y = event.pageY;
	
	logClicks(x, y);
});

function inName(name) {
	first = name.split(" ")[0];
	last = name.split(" ")[1];
	
	first = first.charAt(0).toUpperCase() + first.slice(1);
	last = last.toUpperCase();
	
	return last + " " + first;
}

function locationizer(work_obj) {
	var locations = [];
	for (var job in work_obj.jobs) {
		locations.push(work_obj.jobs[job].location);
	}
	
	return locations;
}
$("#mapDiv").append(googleMap);
















