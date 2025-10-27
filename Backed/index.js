const app =require('./app');
const config=require('./Config/config')

const PORT=config.app.port;

//Run the Server
app.listen(PORT,()=>{
    console.log( `Server running on http://localhost:${PORT}`);
});
