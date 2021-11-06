function validateLogin(email, pword) {
    if (email.length > 3 && pword.length > 2){
        return true
    } else {
        return false
    }
}

function validateSignup(email, pword, auth){
    if (email.length > 3 && pword.length > 2 && auth.length > 2){
        return true
    } else {
        return false
    }
}

module.exports = { validateLogin, validateSignup }