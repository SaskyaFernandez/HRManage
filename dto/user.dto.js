/**
 * User
 * @typedef {object} userDTO
 * @property {number} id
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} email
 * @property {string} password
 * @property {roleDTO[]} role
 * @property {string} entryDate
 * @property {boolean} isDeleted
 * @property {number} maxHolidays
 * @property {number} holidaysLeft
 * @property {string} image
*/
export class UserDTO {
    constructor({ id, firstname, lastname, email, password, role, entryDate, isDeleted, maxHolidays, holidaysLeft, image }) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.role = role;
        this.entryDate = entryDate;
        this.isDeleted = isDeleted;
        this.maxHolidays = maxHolidays;
        this.holidaysLeft = holidaysLeft;
        this.image = image;
    }
}