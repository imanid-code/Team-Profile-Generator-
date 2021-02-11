const Employee = require("../lib/Employee");

describe("Employee", () => {
    
    describe ("getName", () => {
        it("should return employee name", () =>{
            const employee = new Employee ("Imani", "1025", "imani@gmail.com")
            const myEmpName = employee.getName(); 
            expect(myEmpName).toEqual("Imani")
        
        })})
            describe("getID", () => {
                it("should return ID number", () =>{
                    const employee = new Employee ("Imani", "1025", "imani@gmail.com")
                    const myId = employee.getId();
                    expect(myId).toEqual("1025");
                })

            })
    

                describe("getEmail" , () => {
                    it("should return the email address", () =>{
                        const employee = new Employee ("Imani", "1025", "imani@gmail.com")
                        const myEmail = employee.getEmail();
                        expect(myEmail).toEqual("imani@gmail.com");
                    })
                })
    },
     

) 