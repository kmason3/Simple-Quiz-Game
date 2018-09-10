//app.js

const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Nedacas6',
  database: 'Customers'
});
con.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

con.query('SELECT * FROM submits', (err,rows)=>{
	if(err) throw err;

	console.log('Data received from databease:\n')
	//console.log(rows);
	rows.forEach( (row) => {
 	 console.log(`${row.first_name} is in ${row.last_name}`);
	});
});
