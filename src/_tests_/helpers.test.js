import { SetBirthDateLimit, SetDateLimit, capitalize } from "../utils/functions/helpers"


describe('SetBirthDateLimit function', () => {
  test('It should return a date 18yrs from today', () => {
    const ageMin = 18
    const minResult = new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]
    expect(SetBirthDateLimit( ageMin )).toBe(minResult)
  })
  test('It should return a date 70yrs from today', () => {
    const ageMax = 70
    const maxResult = new Date(new Date().setFullYear(new Date().getFullYear() - 70)).toISOString().split('T')[0]
    expect(SetBirthDateLimit( ageMax )).toBe(maxResult)
  })
})


describe('SetDateLimit function', () => {
  test('It should return a start date 30 days before today', () => {
    const days = -30
    const minResult = new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split('T')[0]
    expect(SetDateLimit( days )).toBe(minResult)
  })
  test('It should return a start date 120 days from today', () => {
    const days = 120
    const maxResult = new Date(new Date().setDate(new Date().getDate() + 120)).toISOString().split('T')[0]
    expect(SetDateLimit( days )).toBe(maxResult)
  })
})


describe('capitalize function', () => {
  test('It should capitalize the first letter of each word of a given string', () => {
    expect(capitalize('joHN pHiLipPE')).toBe('John Philippe')
  })
})
