/**
 * holiday
 * @typedef {object} holidayDTO
 * @property {number} id
 * @property {userDTO.id} userid
 * @property {date} startdate
 * @property {date} enddate
 * @property {boolean} isaccepted
*/
export class holidayDTO {

    constructor({ id, userid, startdate, enddate, isaccepted}) {
        this.id = id;
        this.userid = userid;
        this.startdate = startdate;
        this.enddate = enddate;
        this.isaccepted = isaccepted;
    }
}