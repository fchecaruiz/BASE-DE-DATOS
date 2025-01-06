import { main } from "./retos";

async function crearTabla() {
   

let sql = "CREATE TABLE direccion (id INT AUTO_INCREMENT PRIMARY KEY, " +
                                     "calle VARCHAR(200), " + 
                                     "numero INT, " + 
                                     "ciudad VARCHAR(60))";

let [result] = await connection.query(sql);
console.log("Table creada OK");
console.LOG(result);
}