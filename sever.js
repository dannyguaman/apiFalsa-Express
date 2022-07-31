const express = require("express");
const { faker } = require('@faker-js/faker');


class Usuario {
    constructor() {
        this._id = faker.datatype.uuid();
        this.first_name =  faker.name.firstName();
        this.second_name = faker.name.lastName();
        this.telephone_number = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = "sfasfdasfdasfdsfd";
    }
}

class Empresa {
    constructor(){
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address =  {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            postal_code: faker.address.zipCodeByState(),
            country: faker.address.country()
        };
    }
}

const app = express();
const port = 8000;


app.get("/api/users/new", (req, res) => {
    res.json(new Usuario());
})

app.get("/api/companies/new", (req, res) => {
    res.json(new Empresa());
})

app.get("/api/user/company", (req, res) => {
    res.json({company: new Empresa(), user: new Usuario()});
})


app.listen(port, () => console.log(`Listening on port: ${port}`));
