// import components
import {ConvertDate, SetBirthDateLimit, SetDateLimit, capitalize } from "../utils/functions/helpers"

describe('ConvertDate function', () => {
  
  it('should covert the date to format yyyy-mm-dd not mm/dd/yyyy', async () => {
    expect(ConvertDate('2022-02-01')).toEqual('02/01/2022')
  })
})

describe('SetBirthDateLimit function', () => {
  it('should return a date 18yrs from today', async () => {
    const minAge = 18
    const expectedMinDate = new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]
    expect(SetBirthDateLimit( minAge )).toEqual(expectedMinDate)
  })
  it('Ishould return a date 70yrs from today', async () => {
    const maxAge = 70
    const expectedMaxDate = new Date(new Date().setFullYear(new Date().getFullYear() - 70)).toISOString().split('T')[0]
    expect(SetBirthDateLimit( maxAge )).toEqual(expectedMaxDate)
  })
})


describe('SetDateLimit function', () => {
  it('should return a start date 30 days before today', async () => {
    const days = -30
    const expectedMinResult = new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split('T')[0]
    expect(SetDateLimit( days )).toBe(expectedMinResult)
  })
  it('should return a start date 120 days from today', async () => {
    const days = 120
    const maxResult = new Date(new Date().setDate(new Date().getDate() + 120)).toISOString().split('T')[0]
    expect(SetDateLimit( days )).toEqual(maxResult)
  })
})


describe('capitalize function', () => {
  it('should capitalize the first letter of each word of a given string', async () => {
    expect(capitalize('joHN pHiLipPE')).toEqual('John Philippe')
  })
})
