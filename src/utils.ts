const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


interface Options {
    hideTime?: boolean,
    nextTime?: boolean,
    previuosTime?: boolean

}

export function getMonths() {
    let arr = [];

    arr = [...months]

    return arr
}



export function getAllDaysInMonth(date: Date) {

    let first = new Date(date.getFullYear(), date.getMonth(), 1)
    first.setDate(1 - first.getDay()) 
   

    let last = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    const lastDate = last.getDate()
    last.setDate(lastDate + (7 - last.getDay())) 
   

    

    let arr = [];

     while(first < last) {
        first.setDate(first.getDate() + 1)
        arr.push(new Date(first))
     }

    return arr
}



export function formatDateFull(dateObj: Date, options: Options = {}): string {
    const { hideTime } = options
    let message = ''
    
    let year, date, month, hour, minutes

    year = dateObj.getFullYear()
    month = months[dateObj.getMonth()]
    date = dateObj.getDate()

    message += `${month} ${date}, ${year}`

    if (!hideTime) {
        hour = dateObj.getHours()
        minutes = dateObj.getMinutes()

        return hour < 10 && minutes < 10 ? message +=`, 0${hour}:0${minutes}` : message += `, ${hour}:${minutes}`

        
    }
  
    return message
}

export function formatDateTitle(dateObj:Date, options: Options= {}): string {
   const {nextTime} = options
   const {previuosTime} = options
    let year, month
    let message = ''

        year = dateObj.getFullYear()
        month = monthsFull[dateObj.getMonth()]
        message = `${month} ${year}`
  
    return message

}

export function isSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate()
   
}

function getDateFixedToDay(date: Date) {
    return  date.getTime() / (1000 * 60 * 60 * 24)
}

export function isBeforeDay(date1: Date, date2: Date): boolean {
    return getDateFixedToDay(date1) > getDateFixedToDay(date2)
}

export function isAfterDay(date1: Date, date2: Date): boolean {
    return getDateFixedToDay(date1) < getDateFixedToDay(date2)
}

export function isAfterMonth(date1: Date, date2: Date): boolean {
    return new Date(date1.getFullYear(), date1.getMonth()).getTime() < new Date(date2.getFullYear(), date2.getMonth()).getTime()
}

export function isSameMonth(date1:Date, date2: Date):boolean {
    return  new Date(date1.getFullYear(), date1.getMonth()).getTime() === new Date(date2.getFullYear(), date2.getMonth()).getTime()  
}
 

export function isBeforeMonth(date1: Date, date2:Date):boolean {
    return  new Date(date1.getFullYear(), date1.getMonth()).getTime() > new Date(date2.getFullYear(),date2.getMonth()).getTime()
}

export function isSameDate(date1: Date, date2: Date, granularity: 'day' | 'month' | 'year' | 'date' = 'date'): boolean {
    const sameYear = date1.getFullYear() === date2.getFullYear()
    const sameMonth = date1.getMonth() === date2.getMonth()
    const sameDay = date1.getDate() === date2.getDate()
    const sameDate = date1.getTime() === date2.getTime()

    switch (granularity) {
        case 'day':
            return sameYear && sameMonth && sameDay
        case 'month':
            return sameYear && sameMonth
        case 'year':
            return sameYear
        default:
            return sameDate
    }
}







