const Employee = require("Employee");

class Engineer{
    const (name,id,email,github){
        //super = parent class , const of parents class to access parents properties and methods 
    super(name,id,email);
    this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return Engineer;
    }
}

module.exports = Engineer;