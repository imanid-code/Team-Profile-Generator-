const Employee = require("Employee");

class Manager{
    const (name, id, email, officeNumber){
        super(name, id , email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return Manager;
    }
}

module.exports = Manager;