// import functions
import { ConvertDate, SetBirthDateLimit, capitalize } from "../utils/functions/helpers"


describe('ConvertDate function', () => {
  
  it('should covert the date to format MM/dd/yyyy not M/d/yyyy', async () => {
    expect(ConvertDate('2022-02-01')).toEqual('02/01/2022')
    expect(ConvertDate('2022-02-01')).not.toEqual('2/1/2022')
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

describe('capitalize function', () => {

  it('should capitalize the first letter of each word of a given string', async () => {
    expect(capitalize('joHN pHiLipPE')).toEqual('John Philippe')
  })
})
