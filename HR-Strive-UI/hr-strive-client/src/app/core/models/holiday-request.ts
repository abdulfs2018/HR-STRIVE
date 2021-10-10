export interface HolidayRequest {

    id: number,
    requestDate: string,
    fromDate: string,
    toDate: string,
    status: string,
    statusText: string,
    dateApproved: string,
    days: number,
    approve: string,
    buttons: {
        edit: boolean,
        update: boolean,
        delete: boolean
    }
}