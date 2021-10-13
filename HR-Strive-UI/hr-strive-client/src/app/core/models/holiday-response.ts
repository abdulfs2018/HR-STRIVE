export interface HolidayResponse {

    id: number,
    requestDate: string,
    fromDate: string,
    toDate: string,
    status: string,
    statusText: string,
    dateApproved: string,
    days: string,
    approve: string,
    buttons: {
        edit: boolean,
        update: boolean,
        delete: boolean
    }
}