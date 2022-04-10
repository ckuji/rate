export interface IData {
    Date: string,
    PreviousDate: string,
    PreviousURL: string,
    Timestamp: string,
    Valute: {
        [Name: string]: {
            ID: string,
            NumCode: number,
            CharCode: string,
            Nominal: number,
            Name: string,
            Value: number,
            Previous: number
        }
    }
}