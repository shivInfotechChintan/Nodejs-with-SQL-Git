const Employee = require('../modal/employeeModal');

exports.create = (req, res) => {
    const new_employee = new Employee(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.statusCode = 400;
        res.send({ error: true, message: 'Please Enter all field' });
    } else {
        Employee.create(new_employee, (err, result) => {
            if (err)
                res.send(err);


            res.statusCode = 200;
            res.json({ error: false, message: 'Data Add Successful' });
            console.log('id', result);
        });
    }
};

exports.findAll = (req, res) => {
    Employee.findAll((err, employee) => {
        console.log('Controller');
        if (err)
            res.send(err);

        res.statusCode = 200;
        console.log('Employee', employee);
        res.json(employee);
    });
};

exports.findById = (req, res) => {
    Employee.findById(req.params.id, (err, employee) => {
        if (err) {
            res.statusCode = 400;
            res.json({ error: true, message: 'ID not Found' });
        } else {
            res.statusCode = 200;
            console.log('Employee', employee);
            res.json(employee);
        }
    });
};

exports.update = (req, res) => {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.statusCode = 400;
        res.send({ error: true, message: 'Please Enter all field' });
    } else {
        Employee.update(req.params.id, req.body, (err, employee) => {
            if (err) {
                res.statusCode = 401;
                res.json({ error: true, message: 'ID not Found' });
            } else {
                res.statusCode = 200;
                console.log('Employee', employee);
                res.json({ error: true, message: 'Data Update Successfully' });
            }
        })
    }
}

exports.delete = (req, res) => {
    Employee.delete(req.params.id, (err, employee) => {
        if (err) {
            res.statusCode = 401;
            res.json({ error: true, message: 'ID not Found' });
        } else {
            res.statusCode = 200;
            console.log('Employee', employee);
            res.json({ error: true, message: 'Data Delete Successfully' });
        }
    })
}