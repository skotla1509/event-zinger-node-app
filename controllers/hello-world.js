const HelloController = (app) => {
    app.get('/', (req, res) => {
        res.send('Welcome to Full Stack Development!')
    })
};

export default HelloController;