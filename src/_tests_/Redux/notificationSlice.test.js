import reducer from '../../Redux/notificationsSlice'

describe('Notifcation reducer', () => {

  // setup

  const initialState = []

  const notifcation = 
                  {
                    id: '1',
                    title: 'Info',
                    description: 'test message',
                    backgroundColor: 'blue',
                    icon: '☑️'
                  }

  const previousState = 
                  [
                    {
                      id: '1',
                      title: 'Info',
                      description: 'test message',
                      backgroundColor: 'blue',
                      icon: '☑️'
                    },
                    {
                      id: '2',
                      title: 'Success',
                      description: 'test message',
                      backgroundColor: 'green',
                      icon: '✅'
                    }
                  ]

  const notificationToRemoveId = 1    

// tests

    it('should return the initial state when state is undefined', async () => {
        expect(reducer(undefined, {})).toEqual([])
       })
  
    it('should return the state initial when state is undefined', async () => {
      expect(reducer(undefined, { type: '@INIT' })).toEqual([]) 
      })

    it('should add a notification', async () => {
      expect(reducer(initialState, { 
        type: 'notifcations/addNotification', 
        payload: notifcation , })).toEqual
          ([{
            id: '1',
            title: 'Info',
            description: 'test message',
            backgroundColor: 'blue',
            icon: '☑️'
          }]) 
      })

    it('should remove a notification', async () => {
      expect(reducer(previousState, { 
        type: 'notifcations/removeNotification', 
        payload: notificationToRemoveId , })).toEqual
          ([                  {
            id: '2',
            title: 'Success',
            description: 'test message',
            backgroundColor: 'green',
            icon: '✅'
          }]) 
      })

    it('should return state on invalid action', async () => {
        expect(reducer(initialState, { type: 'INVALID' })).toEqual([])
        })

})