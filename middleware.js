module.exports= reqFilter = (req, resp, next) => {
    // next is a function that controls whether to 
    // execute other functions or not.
    if (!req.query.age) {
        resp.send("Please provide age!")
    } else if (!(req.query.age < 18)) {
        resp.send("You cannot access this page.")
    } else {
        next();
    }
}