var dbConn = require('../middleware/db.config');

var Employee = function(employee) {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
};

Employee.create = (newEmp, callback) => {
    dbConn.query('INSERT INTO employees set ?', newEmp, (err, res) => {
        if (err) {
            console.log("Error", err.sqlMessage);
            callback(err.sqlMessage, null);
        } else {
            callback(null, res.insertId);
        }
    });
};

Employee.findAll = (callback) => {
    dbConn.query('SELECT * from employees', (err, res) => {
        if (err) {
            console.log("Error", err.sqlMessage);
            callback(err.sqlMessage, null);
        } else {
            callback(null, res);
        }
    });
};

Employee.findById = (id, callback) => {
    dbConn.query('SELECT * from employees WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('Error', err.sqlMessage);
            callback(err.sqlMessage, null);
        } else {
            callback(null, res);
        }
    });
};

Employee.update = (id, employee, callback) => {
    dbConn.query('UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=?,status=? WHERE id = ?', [employee.first_name, employee.last_name, employee.email, employee.phone, employee.organization, employee.designation, employee.salary, employee.status, id], (err, res) => {
        if (err) {
            console.log('Error', err.sqlMessage);
            callback(err.sqlMessage, null);
        } else {
            callback(null, res);
        }
    })
};

Employee.delete = (id, callback) => {
    dbConn.query('DELETE from employees WHERE id = ?', [id], (err, res) => {
        if (err) {
            console.log('Error', err.sqlMessage);
            callback(err.sqlMessage, null);
        } else {
            callback(null, res);
        }
    })
}



module.exports = Employee;