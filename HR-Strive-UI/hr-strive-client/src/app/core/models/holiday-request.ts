import * as moment from "moment";

export interface HolidayRequest {
    fromDate: moment.Moment,
    toDate: moment.Moment,
    days: string,
    halfDay: string
}