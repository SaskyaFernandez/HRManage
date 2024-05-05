/**
 * role
 * @typedef {object} roleDTO
 * @property {number} id
 * @property {string} name
*/
export class roleDTO {

    constructor({ id, name}) {
        this.id = id;
        this.name = name;
    }
}