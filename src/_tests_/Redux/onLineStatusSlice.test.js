import reducer from '../../Redux/onlineStatusSlice'

describe('OnlineStatus reducer', () => {

  const initialState = {
    isOnline: navigator.onLine
  }

    it('should return the initial state when state is undefined', async () => {
        expect(reducer(undefined, {})).toEqual
          ({
            isOnline: navigator.onLine
          })
       })
  
    it('should return the state initial when state is undefined', async () => {
      expect(reducer(undefined, { type: '@INIT' })).toEqual
        ({
          isOnline: navigator.onLine
        }) 
      })

    it('should return online status true when onlne', async () => {
      expect(reducer(initialState, { 
        type: 'onlineStatus/onLine' })).toEqual
        ({
          isOnline: true
        }) 
      })
      it('should return online status false when offline', async () => {
        expect(reducer(initialState, { 
          type: 'onlineStatus/offLine' })).toEqual
          ({
            isOnline: false
          }) 
        })

    it('should return state on invalid action', async () => {
        expect(reducer(initialState, { type: 'INVALID' })).toEqual
          ({
            isOnline: navigator.onLine
          })
        })

})