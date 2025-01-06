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


//---------------------------------------------------------------------------------------------    
// NOTA MEDIA ALUMNOS ASIGNATURA 1
    // let sql = "SELECT AVG (mark) AS nota_media FROM marks WHERE subject_id = 1";
    // let [result] = await connection.query(sql);
    // console.log(result);
//----------------------------------------------------------------------------------------------
// NUMERO TOTAL DE ALUMNOS EN EL BOOTCAMP
    // let sql = "SELECT COUNT(*) FROM student";
    // let [result] = await connection.query(sql);
    // console.log(result);
//-----------------------------------------------------------------------------------------------
// TODOS LOS CAMPOS TABLA GRUPO
    // let sql = "SELECT * FROM escuela.grupos";
    // let [result] = await connection.query(sql);
    // console.log(result);
//-------------------------------------------------------------------------------------------------
// ELIMINAR NOTAS BASE DATOS POR ENCIMA DE 5 Y DEL AÑO PASADO
 
    // let sql = "DELETE FROM marks WHERE mark > 5 AND (date >= '2024-01-01' AND date <= '2024-12-31')";
    // let [result] = await connection.query(sql);
    // console.log("Datos Obtenidos") 
    // console.log(result); 
//-----------------------------------------------------------------------------------------------------
//DATOS ESTUDIANTES DEL BOOTCAMP DE ESTE AÑO
    // let sql = "SELECT * FROM student WHERE añoIngreso >= '2025-01-01' AND añoIngreso <= '2025-12-31";
    // let [result] = await connection.query(sql);
    // console.log(result);
//------------------------------------------------------------------------------------------------------
//NUM PROFESORES POR ASIGNATURA
    // let sql = "SELECT subject_id, COUNT(teacher_id) AS num_teachers " +
    //           "FROM subject_teacher " + 
    //           "GROUP BY subject_id";
    // let [result] = await connection.query(sql);
    // console.log(result);
//---------------------------------------------------------------------------------------------------------
//ID Y NOTA ENTRE ID 1 Y 20
    // let sql = "SELECT student_id, mark_id FROM marks " +
    //           "WHERE (student_id >= 1 AND student_id <=20) " + 
    //           "OR (mark < 8 AND date = 2024)";
    // let [result] = await connection.query(sql);
    // console.log(result);
//-------------------------------------------------------------------------------------------------------
// MEDIA NOTAS EN ULTIMO AÑO POR ASIGNATURA
    // let sql = "SELECT subject_id, AVG(mark) AS nota_media " +
    //           "FROM marks " + 
    //           "WHERE date >= '2024-01-01' AND date <= '2024-12-31' " +
    //           "GROUP BY subject_id";
    // let [result] = await connection.query(sql);
    // console.log(result);
//------------------------------------------------------------------------------------------------------------
// MEDIA ARITMETICA
    // let sql = "SELECT student_id, AVG(mark) AS nota_aritmetica " +
    //           "FROM marks " + 
    //           "WHERE date >= '2024-01-01' AND date <= '2024-12-31' " +
    //           "GROUP BY student_id";
    // let [result] = await connection.query(sql);
    // console.log(result);
//-------------------------------------------------------------------------------------------------------------------


   


   }catch(error)
   {
   console.log(error);
   connection.end();
   };
};


main();
