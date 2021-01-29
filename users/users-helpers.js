module.exports = {
    validateUser
};

function validateUser(user) {
    let errors = [];

    if (!user.username || user.username.length < 2) {
        errors.push("Please include a username with at least 2 characters");
    }

    if (!user.password || user.password.length < 2) {
        errors.push("Please include a password with at least 2 characters");
    }
    // console.log(errors)
    // console.log(user.username)
    // console.log(user.password)
    
    return {
        isSuccessful: errors.length > 0 ? false : true,
        errors
    };
}