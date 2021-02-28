const siteRouter = require('./site');
const managementRouter = require('./management');

function route(app){
    app.use('/', siteRouter);
    app.use('/manage', managementRouter);
}

module.exports = route;