import connection from '../../config/database.config.js';

export const getHelloWorld = (req, res) => {
    res.render('index', { message: "Hello World" });
};

export const getHelloWorldById = (req, res) => {
    const { id } = req.params;
    const { id: userId, name } = req.user;
    res.render('index', { message: "Hello World from " + name + " ID: " + userId });
};