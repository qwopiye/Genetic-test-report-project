const app=require('./app');
const mongoDatabase = require('./Config/db');
const { serverPort } = require('./sceret');


app.listen(serverPort, () => {
    console.log(`Server is running at http://localhost:${serverPort}`);
     mongoDatabase();
});
