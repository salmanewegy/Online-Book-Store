const loginRoute = require('./routes/login');
const registerRoute = require('./routes/userRegister');
const adminLoginRoute = require('./routes/adminLogin');

const constructorMethod = (app) => {
    app.use("/userLogin", loginRoute);
    app.use("/register", registerRoute);
    app.use("/adminLogin", adminLoginRoute);


};