import * as usersDao from './users-dao.js';

export default (app) => {
    app.post('/register', register)
    app.post('/changepassword', changePassword)
    app.post('/login', login)
    app.post('/logout', logout)
    app.post('/profile', profile)

    app.post('/users', createUser);
    app.get('/users', findAllUsers);
    app.get('/users/:uid', findUserById);
    app.put('/users/:uid', updateUser);
    app.delete('/users/:uid', deleteUser);
};

/* ------------------------------------ Register ------------------------------------ */
const register = async (req, res) => {
    const user = req.body;
    const existingUser = await usersDao.findUserByName(user.userName)
    if (existingUser.length > 0) {
        res.sendStatus(403);
        return;
    }
    user.dateOfJoining = new Date().toISOString().slice(0, 10);
    const currentUser = await usersDao.createUser(user);
    currentUser.password = '';
    req.session['currentUser'] = currentUser;
    // res.json(currentUser);
    res.sendStatus(200);
}
/* ------------------------------------ Login ------------------------------------ */
const login = async (req, res) => {
    const credentials = req.body;
    const existingUser = await usersDao.findUserByCredentials(credentials.userName, credentials.password);
    if (existingUser) {
        existingUser.password = '';
        req.session['currentUser'] = existingUser;
        res.json(existingUser);
        return;
    }
    res.sendStatus(403)
}
/* ------------------------------------ Change Password ------------------------------------ */
const changePassword = async (req, res) => {
    const user = req.body;
    const existingUser = await usersDao.findUserByName(user.userName)
    if (existingUser.length > 0) {
        const updates = {
            password: user.password
        };
        const currentUser = await usersDao.updateUser(existingUser[0]._id, updates);
        currentUser.password = '';
        req.session['currentUser'] = currentUser;
        // res.json(currentUser);
        res.sendStatus(200);
        return;
    }
    res.sendStatus(403);
}
/* ------------------------------------ Logout ------------------------------------ */
const logout = (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
}
/* ------------------------------------ Profile ------------------------------------ */
const profile = (req, res) => {
    if (req.session['currentUser']) {
        res.send(req.session['currentUser'])
    } else {
        res.sendStatus(403)
    }
}
/* ------------------------------------ Create user ------------------------------------ */
const createUser = async (req, res) => {
    const newUser = req.body;
    const actualUser = await usersDao.createUser(newUser)
    res.json(actualUser);
    /*
    usersDao.createUser(newUser)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.sendStatus(400);
        });
     */
}
/* ------------------------------------ Find all users ------------------------------------ */
const findAllUsers  = async (req, res) => {
    let users = await usersDao.findAllUsers();
    users = users.filter((item) => item.userRole !== "ADMINISTRATOR");
    res.json(users);
};
/* ------------------------------------ Find user by name ------------------------------------ */
const findUserByName  = async (req, res) => {
    const name = req.params.name;
    const users = await usersDao.findUserByName(name);
    res.json(users);
};
/* ------------------------------------ Find user by Id ------------------------------------ */
const findUserById  = async (req, res) => {
    const uid = req.params.uid;
    const users = await usersDao.findUserById(uid);
    res.json(users);
};
/* ------------------------------------ Update user ------------------------------------ */
const updateUser = async (req, res) => {
    const uidToUpdate = req.params.uid;
    const updates = req.body;
    const actualUser = await usersDao.updateUser(uidToUpdate, updates);
    res.json(actualUser);
}
/* ------------------------------------ Delete user ------------------------------------ */
const deleteUser = async (req, res) => {
    const uidToDelete = req.params.uid;
    const actualUser = await usersDao.deleteUser(uidToDelete);
    res.json({deleted: uidToDelete, ...actualUser});
}
