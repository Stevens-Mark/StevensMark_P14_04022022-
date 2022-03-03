// Regex's used for form validation
export const usZipCodes = /(^\d{5}$)|(^\d{5}-\d{4}$)/
// export const textRegex = /^[a-zA-ZÀ-ÿ- ]+$/
// export const addressRegex = /^[0-9a-zA-ZÀ-ÿ- ]+$/g
// export const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/

/**
* Returns today's date 'x' amount of years ago based on the age supplied
* @function SetBirthDateLimit
* @param {number} age (currently set between 18-70 yrs)
* @returns Date Limit: format 2022-02-12
* */
export const SetBirthDateLimit = ( age ) => {
  const dateLimit = new Date(new Date().setFullYear(new Date().getFullYear() - age)).toISOString().split('T')[0]
  return dateLimit
  }

/**
* Returns the date 'x' days before/after today's date
* @function SetDateLimit (currently set between 30 days in the past & 120 days in the future)
* @returns date limit: format 2022-02-01
* */
export const SetDateLimit = ( days ) => {
  const priorDate = new Date(new Date().setDate(new Date().getDate() + days))
  const date = priorDate.getDate()
  const month = priorDate.getMonth() + 1
  const year = priorDate.getFullYear()
  return `${year}-${month<10?`0${month}`:`${month}`}-0${date}`
  }

/**
 * Capitalizes the first letter of each word of a given string
 * @function capitalize
 * @param {string} unformatted string 
 * @returns {string} capitalised string 
 */
export const capitalize = (string) => {
  // return string && string[0].toUpperCase() + string.slice(1)
  return string.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
}



/**
 * Check that a date is within a given valid range
 * @function ValidateDate
 * @param {string} dateToTest: the date to test
 * @param {number} maxYears: no of years limit
 * @returns {boolean} 
 */
// export const ValidateDate = ( dateToTest, maxYears ) => {
// 	const formatTestDate = new Date(dateToTest.replace(/-/g, "/"))   //set date based on dateToTest at 01:00:00 hours GMT+0100 (CET)
// 	const currentDate = new Date().toJSON().split('T')[0]   	// set current day on 01:00:00 hours GMT+0100 (CET)
// 	const noOfYears = ~~((Date.now(currentDate) - formatTestDate) / (31557600000))    	// calculate nos of years comparing current date and formatted dateToTest
//   return noOfYears < maxYears ? false : true
// } 
// console.log(ValidateDate('1999-02-21', 18))



