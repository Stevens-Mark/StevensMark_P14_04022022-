import { showToast } from '../utils/functions/showToast'
import colors from '../styles/colors'

describe('ShowToast function', () => {

  it('should return a success notification message with corresponding format color & icon', async () => {
    const result = showToast('success', 'test message')
    expect(result.id).toBeGreaterThanOrEqual(1)
    expect(result.id).toBeLessThanOrEqual(100)
    expect(result.title).toBe('Success')
    expect(result.description).toBe('test message')
    expect(result.backgroundColor).toBe(`${colors.success}`)
    expect(result.icon).toBe('✅')
  })

  it('should return a danger notification message with corresponding format color & icon', async () => {
    const result = showToast('danger', 'test message')
    expect(result.id).toBeGreaterThanOrEqual(1)
    expect(result.id).toBeLessThanOrEqual(100)
    expect(result.title).toBe('Danger')
    expect(result.description).toBe('test message')
    expect(result.backgroundColor).toBe(`${colors.danger}`)
    expect(result.icon).toBe('⛔')
  })

  it('should return an info notification message with corresponding format color & icon', async () => {
    const result = showToast('info', 'test message')
    expect(result.id).toBeGreaterThanOrEqual(1)
    expect(result.id).toBeLessThanOrEqual(100)
    expect(result.title).toBe('Info')
    expect(result.description).toBe('test message')
    expect(result.backgroundColor).toBe(`${colors.info}`)
    expect(result.icon).toBe('☑️')
  })

  it('should return a warning notification message with corresponding format color & icon', async () => {
    const result = showToast('warning', 'test message')
    expect(result.id).toBeGreaterThanOrEqual(1)
    expect(result.id).toBeLessThanOrEqual(100)
    expect(result.title).toBe('Warning')
    expect(result.description).toBe('test message')
    expect(result.backgroundColor).toBe(`${colors.warn}`)
    expect(result.icon).toBe('⚠️')
  })
})