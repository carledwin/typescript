"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("../lesson01-classes/person");
var PersonDao = /** @class */ (function () {
    function PersonDao() {
    }
    PersonDao.prototype.insert = function (person) {
        console.log("Inserindo....", person.toString());
        console.log("Inserido com sucesso.", person.toString());
        return true;
        //throw new Error("Method not implemented.");
    };
    PersonDao.prototype.update = function (object) {
        return true;
    };
    PersonDao.prototype.delete = function (id) {
        return true;
    };
    PersonDao.prototype.find = function (id) {
        return null;
    };
    PersonDao.prototype.findAll = function () {
        return [new person_1.Person("Person 1")];
    };
    return PersonDao;
}());
exports.PersonDao = PersonDao;
//# sourceMappingURL=person-dao.js.map