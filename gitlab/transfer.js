var Gitlab = require('node-gitlab');

var gitlab = new Gitlab({
    url: 'https://git.hxtdt.com',
    token: 'qmedqZ8A4GxhUvY5obkh'
});
var projectId ='webform';

gitlab.projects.show(projectId, function(project) {
    console.log;
    console.log("=== Project ===");
    return console.log(project);
});

gitlab.projects.members.list(projectId, function(members) {
    console.log("");
    console.log("=== Members ===");
    return console.log(members);
});

gitlab.projects.milestones.list(projectId, {
    per_page: 100
}, function(milestones) {
    console.log("");
    console.log("=== Milestones ===");
    return console.log(milestones);
});