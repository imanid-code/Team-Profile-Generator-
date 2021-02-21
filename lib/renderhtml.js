// ('path') - provides path segment seperator

const path = require("path");
const fs = require("fs"); 
//path resolve get the absolute path calc of relative path 
const templatesFolder = path.resolve(__dirname, "../templates");

const render = employees => {
    const html = [];
    

    html.push(employees
        .filter(employee => employee.getRole() === "Manager" )
        .map(manager => renderManager(manager))
        );

        html.push(employees
            .filter(employee => employee.getRole() === "Engineer" )
            .map(engineer => renderEngineer(engineer))
            );
    
            html.push(employees
                .filter(employee => employee.getRole() === "Intern" )
                .map(intern => renderIntern(intern))
                );

                 
        return renderHtml(html.join(""));
};

const renderManager = manager => {
console.log(manager);
let templates = fs.readFileSync(path.resolve(templatesFolder, "manager.html"), "utf8");
templates = replaceTemplates (templates, "role", manager.getRole());
templates = replaceTemplates (templates, "name", manager.getName());
templates = replaceTemplates (templates, "email", manager.getEmail());
templates = replaceTemplates (templates, "id", manager.getId());
templates = replaceTemplates (templates, "officeNumber", manager.getOfficeNumber());
return templates;
};

const renderEngineer = engineer => {
let templates = fs.readFileSync(path.resolve(templatesFolder, "engineer.html"), "utf8");
templates = replaceTemplates (templates, "role", engineer.getRole());
templates = replaceTemplates (templates, "name", engineer.getName());
templates = replaceTemplates (templates, "email", engineer.getEmail());
templates = replaceTemplates (templates, "id", engineer.getId());
templates = replaceTemplates (templates, "github", engineer.getGithub());
return templates;
};

const renderIntern = intern => {
let templates = fs.readFileSync(path.resolve(templatesFolder, "intern.html"), "utf8");
templates = replaceTemplates (templates, "role", intern.getRole());
templates = replaceTemplates (templates, "name", intern.getName());
templates = replaceTemplates (templates, "email", intern.getEmail());
templates = replaceTemplates (templates, "id", intern.getId());
templates = replaceTemplates (templates, "school", intern.getSchool());
return templates;
};

const renderHtml = html =>{

    const templates = fs.readFileSync(path.resolve(templatesFolder, "main.html"), "utf8");
    return replaceTemplates(templates, "team", html);
    
};

const replaceTemplates = (templates, placeholder, value) =>{
    //g modifier: global. All matches (don't return after first match)
//m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)
    const repeat = new RegExp ("{{ " + placeholder + " }}", "gm");
    return templates.replace(repeat, value);
}

module.exports = render;