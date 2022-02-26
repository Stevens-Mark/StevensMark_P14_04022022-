import { SetBirthDateLimit, SetDateLimit, capitalize } from "../utils/functions/helpers"


describe('SetBirthDateLimit function', () => {
  it.skip('should return a date 18yrs from today', () => {
    const minAge = 18
    const expectedMinDate = new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]
    expect(SetBirthDateLimit( minAge )).toEqual(expectedMinDate)
  })
  it.skip('Ishould return a date 70yrs from today', () => {
    const maxAge = 70
    const expectedMaxDate = new Date(new Date().setFullYear(new Date().getFullYear() - 70)).toISOString().split('T')[0]
    expect(SetBirthDateLimit( maxAge )).toEqual(expectedMaxDate)
  })
})


describe('SetDateLimit function', () => {
  it.skip('should return a start date 30 days before today', () => {
    const days = -30
    const expectedMinResult = new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split('T')[0]
    expect(SetDateLimit( days )).toBe(expectedMinResult)
  })
  it.skip('should return a start date 120 days from today', () => {
    const days = 120
    const maxResult = new Date(new Date().setDate(new Date().getDate() + 120)).toISOString().split('T')[0]
    expect(SetDateLimit( days )).toEqual(maxResult)
  })
})


describe('capitalize function', () => {
  it.skip('should capitalize the first letter of each word of a given string', () => {
    expect(capitalize('joHN pHiLipPE')).toEqual('John Philippe')
  })
})
