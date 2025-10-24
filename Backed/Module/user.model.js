
const { v4 : uuidv4} = require('uuid');
const user=[
     {
        "id":uuidv4(),
        "name":"Sohan",
        "age":22,

    },
    {
        "id":uuidv4(),
        "name":"Sohag",
        "age":12,
        
    }
]

module.exports=user