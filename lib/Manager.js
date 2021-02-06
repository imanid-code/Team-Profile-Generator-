const Employee = require("Employee");

class Manager{
    const (name, id, email, officeNumber){
        super(name, id , email);
        this.officeNumber = officeNumber;
    }
    grabOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;