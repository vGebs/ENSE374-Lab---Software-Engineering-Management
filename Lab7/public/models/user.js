// User Object =========================================>

function User(uname, pword) {
    this.uname = uname
    this.pword = pword
}


// Users =============================================>

let user1 = new User("vGebs", "123")
let user2 = new User("vGebs2.0", "321")


// User Array ========================================>
let users = [user1, user2]


// Exports ===========================================>

module.exports = {
    User,
    users
}