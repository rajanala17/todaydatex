const express = require('express')
const app = express()
const addDays = require("date-fns/addDays");

app.get('/',(request,response) => {
    const dat = new Date();
    const day = dat.getDate();
    const month = dat.getMonth()+1;
    const year = dat.getFullYear();
    const result = addDays(new Date(year,month,day), 100);
    const date = `${result.getDate()}/${result.getMonth()+1}/${result.getFullYear()}`
    response.send(date)
}
module.exports = app