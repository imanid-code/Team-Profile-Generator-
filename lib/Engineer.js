const Employee = require("Employee");

class Engineer{
    const (name,id,email,github){
        //super = parent class , const of parents class to access parents properties and methods 
    super(name,id,email);
    this.github = github;
    }

    grabGithub(){
        return this.github;
    }


}

module.exports = Engineer;