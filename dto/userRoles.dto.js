/**
 * User roles
 * @typedef {object} userRolesDTO
 * @property {number} userid
 * @property {number} roleid
 * @property {number} startdate
*/
export class userRolesDTO {
    constructor({ userid, roleid, startdate }) {
        this.userid = userid;
        this.roleid = roleid;
        this.startdate = startdate;
    }
}