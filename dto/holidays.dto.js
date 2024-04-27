/**
 * holiday
 * @typedef {object} holidayDTO
 * @property {number} id
 * @property {userDTO.id} name
 * @property {date} name
 * @property {date} name
 * @property {bool} name
*/
export class holidayDTO {

    constructor({ id, userId, startDate, endDate, isAccepted}) {
        this.id = id;
        this.userId = userId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isAccepted = isAccepted;
    }
}