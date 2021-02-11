const Intern = require("Intern");

decsribe("Intern", () =>{

    it("should return the school name");
    const intern = new Intern ("imani", "1025", "imani@gmail.com", "School: UNCC ")
    const mySchool = intern.getSchool();
    expect(mySchool).toEqual("School: UNCC")
    

})