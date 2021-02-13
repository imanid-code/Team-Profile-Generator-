const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () =>{

    describe("getGithub", () => {

        it("should return github name", () =>{
            const engineer = new Engineer ("imani", "1025", "imani@gmail.com", "https://github.com/imanid-code");
            const myGithub = engineer.getGithub();
            expect(myGithub).toEqual("https://github.com/imanid-code");
            

            
        })
    })

})