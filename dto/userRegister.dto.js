/**
 * User Register
 * @typedef {object} userRegisterDTO
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} email
 * @property {string} password
 * @property {roleDTO[]} role
 * @property {string} entrydate
 * @property {boolean} isdeleted
 * @property {number} maxholidays
 * @property {number} holidaysleft
 * @property {string} image
*/
export class userRegisterDTO {

    constructor({ firstname, lastname, email, password, role, entrydate, isdeleted, maxholidays, holidaysleft, image }) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.role = role;
        this.entrydate = entrydate;
        this.isdeleted = isdeleted;
        this.maxholidays = maxholidays;
        this.holidaysleft = holidaysleft;
        this.image = image;
    }
}
