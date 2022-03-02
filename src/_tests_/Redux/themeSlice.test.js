import reducer, { toggle } from '../../Redux/themeSlice'
 
describe('Theme reducer', () => {
  
    it('should return the initial state when state is undefined', async () => {
        expect(reducer(undefined, {})).toEqual('light')
    })
 
    it('should return the state initial  when state is undefined', async () => {
        expect(reducer(undefined, { type: '@INIT' })).toEqual('light')
    })

    it('should toggle theme', async () => {
        expect(reducer('light', toggle())).toEqual('dark')
        expect(reducer('dark', toggle())).toEqual('light')
    })

    it('should return state on invalid action', async () => {
        expect(reducer('light', { type: 'INVALID' })).toEqual('light')
    })
})
