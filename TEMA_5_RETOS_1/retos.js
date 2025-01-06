const mysql = require("mysql2/promise");

async function main()
{
  let connection;
  try
  {
    connection = await mysql.createConnection(
    {
          host         : "localhost",
          user         : "root",
          password     : "codenotcH1&",
          database     : "escuela"
    });
    console.log("Conexion correcta")


    // let sql = "UPDATE marks SET mark = 0";
    // let [result] = await connection.query(sql);
    // console.log("Datos actualizados");
    // console.log(result)
    

    // let sql = "SELECT * FROM teachers";
    // let [result] = await connection.query(sql);
    // console.log(result);


    //https://sqlserverdb.com/sql-delete-para-eliminar-registros/
    // let sql = "DELETE FROM marks WHERE date < '2015-01-01'";
    // let [result] = await connection.query(sql);
    // console.log("Datos Obtenidos") 
    // console.log(result);


    // let sql = "UPDATE marks SET mark = 5 WHERE mark < 5";
    // let [result] = await connection.query(sql);
    // console.log("Datos actualizados");
    // console.log(result)


   }catch(error)
   {
   console.log(error);
   connection.end();
   };
};


main();





