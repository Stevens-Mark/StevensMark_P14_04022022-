// Regex's used for form validation
export const usZipCodes = /(^\d{5}$)|(^\d{5}-\d{4}$)/
export const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
export const textRegex = /^[a-zA-Z ]+$/
export const addressRegex = /^[0-9a-zA-Z ]+$/g

/**
 * Checks whether user is over 18yrs old
 * @function AgeNotValidate
 * @param {string} birthday 
 * @returns boolean
 * */
export const AgeNotValidate = (birthday) => {
  const optimizedBirthday = birthday.replace(/-/g, "/")
  const userBirthday = new Date(optimizedBirthday);
  const userAge = ~~((Date.now() - userBirthday) / (31557600000))
  return (userAge < 18 || userAge > 100 ) ? true : false
  }


