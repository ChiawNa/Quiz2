let dbUsers = [
    {
        username: "kang",
        password: "123456",
        name: "Kang",
        email: "kang@student.utem.edu.my"
    },
    {
        username: "john",
        password: "123456",
        name: "John",
        email: "john@student.utem.edu.my"
    },
    {
        username: "ali",
        password: "123456",
        name: "Ali",
        email: "ali@student.utem.edu.my"
    },
]

function login(reqUsername,reqPassword){
    let matchUser = dbUsers.find(x=> x.username == reqUsername)
    console.log(matchUser)

    if(!matchUser) return "User not found!"
    if(matchUser.password == reqPassword){
        return matchUser
    }else{
        return "Invalid password"
    }
}

function register(reqUsername,reqPassword,reqName,reqEmail){
    dbUsers.push({
        username: reqUsername,
        password: reqPassword,
        name: reqName,
        email: reqEmail
    })
}

//try to login
console.log( login("kang", "password"))
console.log( login("utem", "password"))

register("utem","2001","fkekk","fkekk@student.utem.edu.my")

console.log( login("utem","2001","fkekk","fkekk@student.utem.edu.my"))