import { MdDateFormats } from "@angular/material/material";


export const MY_DATE_FORMATS: MdDateFormats = {
    parse: {
        dateInput: 'DD/MM/YYYY', //Este es el formato de fecha de datepicker.
    },
    display: {
        dateInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
}