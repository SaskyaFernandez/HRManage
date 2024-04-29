/**
 * holiday
 * @typedef {object} holidayRequestDTO
 * @property {userDTO.id} userid
 * @property {string} startdate
 * @property {string} enddate
 * @property {boolean} isaccepted
*/
export class holidayRequestDTO {

    constructor({ userid, startdate, enddate, isaccepted }) {
        this.userid = userid;
        this.startdate = startdate;
        this.enddate = enddate;
        this.isaccepted = isaccepted;
    }
}