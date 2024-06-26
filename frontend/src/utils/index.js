import { navItems } from "../constants";

export const showAlert = (alertState, hide) => {
    alertState(true)
    setTimeout(() => {
        hide(true)
    },3000)
    setTimeout(() => {
        hide(false)
        alertState(false)
    }, 3200);
}

export const formatWeekDay = (day) => {
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return daysOfWeek[day];
};

export const formatOrderDate = (date) => {
    return `${formatWeekDay(date.day())} ${date.date()}-${date.month()+1}-${date.year()} at ${date.hour()}:${date.minute()}`
}

export const getOrderElements = (sales) => {
    const elements = []
    sales.forEach(sale => {
        let present = false
        elements.map(element => {
            if (sale.item.id === element.sale.item.id) {
                present=true
                return {...element, count: element.count++}
            }
            return element
        })
        if (!present) {
            elements.push({sale: sale, count: 1})
        }
    })

    return elements
}

export const formatCollapsedOrder = (sales) => {
    const elements = getOrderElements(sales)
    let result = ""
    elements.forEach(element => {
        let substring = element.count.toString() + " x " + element.sale.item.name + " + "
        result += substring
    })
    result = result.slice(0, -2)
    return result
}
export const formatExtendedOrder = (sales) => {
    const elements = getOrderElements(sales)
    let result = []
    elements.forEach(element => {
        result.push({text: `${element.count} x ${element.sale.item.name}`, price: `${ element.count>1 ? `(${element.count} x ${element.sale.price})` : ""} ${element.sale.price*element.count}`})
    })
    return result
}

export const getTitle = path => {
    const currentItem = navItems.find(item => path.startsWith(item.path))
    return currentItem.text
}

export const getIncomeProgressData = data => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let values = Array(12).fill(0)

    data.forEach(item => {
        values[item.month-1] = item.income
        for (let i = item.month; i < 12; i++) {
            values[i] = null
        }
    })

    return {'months':months, 'values':values}
}
