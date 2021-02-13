const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () =>{

    it("should return officeNumber", () => {

    

    const manager = new Manager ("imani", "1025", "imani@gmail.com", "Office Number: 555-5555");
    const officeNumber = manager.getOfficeNumber();
    expect(officeNumber).toEqual("Office Number: 555-5555");
})
})