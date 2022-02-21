// Regex's used for form validation
export const usZipCodes = /(^\d{5}$)|(^\d{5}-\d{4}$)/
// export const textRegex = /^[a-zA-ZÀ-ÿ- ]+$/
// export const addressRegex = /^[0-9a-zA-ZÀ-ÿ- ]+$/g
// export const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/

/**
 * Checks whether user is over 18yrs old
 * @function AgeNotValidate
 * @param {string} birthday 
 * @returns {boolean}
 * */
// export const AgeNotValidate = (birthday) => {
//   const optimizedBirthday = birthday.replace(/-/g, "/")
//   const userBirthday = new Date(optimizedBirthday);
//   const userAge = ~~((Date.now() - userBirthday) / (31557600000))
//   return (userAge < 18 || userAge > 100 ) ? true : false
//   }
  
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
* @returns date limit: format 2022-02-12
* */
export const SetDateLimit = ( days ) => {
  const priorDate = new Date(new Date().setDate(new Date().getDate() - days))
  const date = priorDate.getDate()
  const month = priorDate.getMonth() + 1
  const year = priorDate.getFullYear()
  return `${year}-${month<10?`0${month}`:`${month}`}-${date}`
  }

/**
 * Checks whether user entered a valid start date
 * A valid date is a max of 30 days before today's date
 * @function ValidStartDate
 * @param {string} start date
 * @returns {boolean}
 * */
// export const ValidStartDate = ( startDate ) => {
//   return (Date.parse(startDate) < Date.parse(GetDateMonthBefore()))? false : true
//   }



