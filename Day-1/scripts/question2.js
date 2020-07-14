//declared name variable globally
var firstName = "akhil";
let lastName = "reddy"

console.log("var declared globaly ==>", firstName);
console.log("let declared globaly ==>", lastName);





{
    //logging globally declared var in blocked scope
    console.log("variable declared globaly ==>", firstName)

    //logging globally declared let in blocked scope
    console.log("let declared globaly ==>", lastName)

    let middleName = "narayana"
    console.log("let declared in blocked scope ==>", middleName)

    var phone = 9000143993
}

console.log("var declared in blocked scope and trying to access outside the block", phone)
 console.log("let declared in blocked scope and trying to access outside the block",middleName)

// we can access blocked scope values globally by using var. but we we use let we can acces out side the block 


const department = "CSE";

console.log(department);


department = "ECE"; // we cant able to change constant values

console.log(department);