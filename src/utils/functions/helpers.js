
/*Formats a date correctly from yyyy-mm-dd to dd/mm/yyyy
* @function convertDate
* @returns {string} formatted date
*/
export const ConvertDate = ( input ) => {
  const [year, month, day] =  input.split('-')
  return `${day}/${month}/${year}`
  }

/**
* Returns today's date 'x' amount of years ago based on the age supplied
* @function SetBirthDateLimit
* @param {number} age (currently set between 18-70 yrs: see: EmployeeForm.jsx)
* @returns Date Limit: format 2022-02-12
* */
export const SetBirthDateLimit = ( age ) => {
  const dateLimit = new Date(new Date().setFullYear(new Date().getFullYear() - age)).toISOString().split('T')[0]
  return dateLimit
  }

/**
* Returns the date 'x' days before/after today's date
* @function SetDateLimit (currently set between 30 days in the past & 120 days in the future:
* see: EmployeeForm.jsx)
* @returns date limit: format 2022-02-01
* */
export const SetDateLimit = ( days ) => {
  const priorDate = new Date(new Date().setDate(new Date().getDate() + days))
  const date = priorDate.getDate()
  const month = priorDate.getMonth() + 1
  const year = priorDate.getFullYear()
  return `${year}-${month<10?`0${month}`:`${month}`}-${date<10?`0${date}`:`${date}`}`
  }

/**
 * Capitalizes the first letter of each word of a given string
 * @function capitalize
 * @param {string} unformatted string 
 * @returns {string} capitalised string 
 */
export const capitalize = (string) => {
  return string.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
}



// Regex's used for form validation
// export const usZipCodes = /(^\d{5}$)|(^\d{5}-\d{4}$)/
// export const textRegex = /^[a-zA-ZÀ-ÿ- ]+$/
// export const addressRegex = /^[0-9a-zA-ZÀ-ÿ- ]+$/g
// export const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/

/**
/*Formats a date correctly, example:
* from Fri Jun 03 2022 02:00:00 GMT+0200 (Central European Summer Time) to 03/06/2022 (instead of 3/6/2022)
* @function convertDate
* @returns {string} formatted date
*/
// export const ConvertDate = (str) => {
//   const date = new Date(str),
//     mnth = ("0" + (date.getMonth() + 1)).slice(-2),
//     day = ("0" + date.getDate()).slice(-2)
//   return [mnth, day, date.getFullYear()].join("/")
//   }