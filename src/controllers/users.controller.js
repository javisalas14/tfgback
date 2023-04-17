import {getConnection} from "./../database/database"; 

const getUsuarios= async (request,response)=>{   
    const connection = await getConnection();
    const result= await connection.query("SELECT id, nombre, apellido, correo, contrasena FROM Users");
    console.log(result);
    response.json(result);
};

export const methods = {
    getUsuarios
};