'use strict'
const mysql = require("mysql2");
const conn = require('./database_connect');

const sqlNamePablics = "SELECT id,name FROM advlay where `item`";

// Сам объект партнер
let partner = {
    name: "",
    listPablics: listPablics,
    display: listPablicsFromPartner()
};

//Массив с парнтерами
let listPartnerships = [
   
];
// Массив с группами
let listPablics = [];

// Метод отображения груп
function listPablicsFromPartner() {

};

//метод добавления партнеров
function addPartnership(partner,listPartnerships) {
    partner.name = this.name;
    listPartnerships.push(listPablics);
    listPartnerships.push(partner);

};

//метод удаления партнеров
function deletePartnership() {

};

// Метод добавления групп для партнера
function addListPublics(sql,conn,listPablics,) {

};

// 




// conn.query(sql, function(err,res) {
//     if(err) throw err;
//     globalListPabliks = JSON.parse(JSON.stringify(res));
//     console.log(globalListPabliks);
// })
