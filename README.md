# AngularioWithCustomDateadapter

This project is an implementation sample of MdDateFormats and DateAdapter from @angular/material (used 'es-UY' localization for my own convinience). 

Its based on 'native-date-adapter.ts' and 'native-date-formats.ts' implementations from @angular/material.

It uses momentjs to parse the dates in locale format.

It has the following key parts:
-'locale' into MyDateAdapter class, defines the format to display in dates. Eg: 'es-UY'.
-If doesnt support INTL, you must override DEFAULT_MONTH_NAMES and DEFAULT_DAY_OF_WEEK_NAMES values into MyDateAdapter.
-'parse.dateInput' from MY_DATE_FORMATS const, where you specify the format to parse the values as string. This should be the date format used by the locale format specified.

Project generated with Angular CLI. To start project run: `ng serve`

npm dependencies installed:
`npm install --save moment`

`npm install --save @angular/material`


