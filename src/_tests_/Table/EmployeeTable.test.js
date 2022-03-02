import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import custom render to connect component to redux
import { render } from '../../utils/test/render'
// imort component
import EmployeesTable from '../../components/Table/EmployeesTable'

// test setup

const setupForPagination = () => {    // set up used to check pagination
const utils = render(<EmployeesTable />)
const pagination = screen.getByLabelText(/Page Size/i)
userEvent.selectOptions(pagination, screen.getByRole('option', {name: 'Show 25'}),)
return {
      pagination,
      ...utils,
    }
}

const setupForGlobalSearch = () => {    // set up used to check global search
  const utils = render(<EmployeesTable />)
  const globalSearch = screen.getByLabelText(/Search/i)
  userEvent.type(globalSearch, 'test word')
  return {
        globalSearch,
        ...utils,
      }
  }

// tests (the mockData in MOCK_DATA_FOR_TESTING.json & tableHeader.js are need for the tests, if removed/altered the tests will fail)

describe('EmployeesTable', () => {

  it('should render the headings/table footer correctly and 10 rows as default', async () => {
    render(<EmployeesTable />)
    const row = screen.getAllByRole('row')
    expect(screen.getAllByRole('row')[0]).toHaveTextContent(/First Name/i)
    expect(screen.getAllByRole('row')[0]).toHaveTextContent(/Last Name/i)
    expect(screen.getAllByRole('row')[0]).toHaveTextContent(/Start Date/i)
    expect(screen.getAllByRole('row')[0]).toHaveTextContent(/Department/i)
    expect(screen.getAllByRole('row')[0]).toHaveTextContent(/Date Of Birth/i)
    expect(screen.getAllByRole('row')[0]).toHaveTextContent(/Street/i)
    expect(screen.getAllByRole('row')[0]).toHaveTextContent(/City/i)
    expect(screen.getAllByRole('row')[0]).toHaveTextContent(/Zip Code/i)
    expect(row.length).toBe(11)
    expect(screen.getByTestId('showPage').textContent).toEqual('Showing Page 1 of 5 pages ')
    expect(screen.getByText(/Go to Page/i)).toBeTruthy()
  })

  it('should render 25 rows if the user chooses "Show 25" (ie. pagination functions)', async () => {
    setupForPagination() 
    const row = screen.getAllByRole('row')
    expect(screen.getByRole('option', {name: 'Show 25'}).selected).toBe(true)
    expect(row.length-1).toBe(25)   // -1 to remove heading to test pagination correctly
  })

  it('should render "showing pages" with correct number of pages (eg, "Show 25" is 2 pages)', async () => {
    setupForPagination()
    expect(screen.getByTestId('showPage').textContent).toEqual('Showing Page 1 of 2 pages ')
  }) 

  it('should render 2 rows if the user enters word "test word" (ie. GlobalSearch functions)', async () => {
    setupForGlobalSearch() 
    const row = screen.getAllByRole('row')
    expect(row.length-1).toBe(2)   // -1 to remove heading to test GlobalSearch correctly
  })  // "test word" known to appear only twice (2 times) in the mock data for testing

  it('should render the search results at foot of table for global search (eg. 2 records for search test)', async () => {
    setupForGlobalSearch() 
    screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === "Entries 1 to 2 of 2 records found (filtered from a total of 50 records)"
      const nodeHasText = hasText(node)
      return nodeHasText    // solution found at https://polvara.me/posts/five-things-you-didnt-know-about-testing-library
    })
  }) 

  it('should navigate to next & previous page', async () => {
    render(<EmployeesTable />)
    expect(screen.getByTestId('showPage').textContent).toEqual('Showing Page 1 of 5 pages ')

    userEvent.click(screen.getByTestId('next'))
    await waitFor(() => {
      expect(screen.getByTestId('showPage').textContent).toEqual('Showing Page 2 of 5 pages ')
    })

    userEvent.click(screen.getByTestId('previous'))
    await waitFor(() => {
      expect(screen.getByTestId('showPage').textContent).toEqual('Showing Page 1 of 5 pages ')
    })
  }) 

  it('should navigate to last & first page', async () => {
    render(<EmployeesTable />)
    expect(screen.getByTestId('showPage').textContent).toEqual('Showing Page 1 of 5 pages ')

    userEvent.click(screen.getByTestId('last'))
    await waitFor(() => {
      expect(screen.getByTestId('showPage').textContent).toEqual('Showing Page 5 of 5 pages ')
    })

    userEvent.click(screen.getByTestId('first'))
    await waitFor(() => {
      expect(screen.getByTestId('showPage').textContent).toEqual('Showing Page 1 of 5 pages ')
    })
  }) 

 

    // it.only('test', async () => {
    //   render(<EmployeesTable />)
    //   const input =screen.getByLabelText(/Go to page:/i)
    //   userEvent.type(input, '2')
    //   expect(input.value).toBe('2')
    //   await waitFor(() => {
    //     expect(screen.getByTestId('showPage').textContent).toEqual('Showing Page 2 of 5 pages ')
    //   })

    // })
})


// Go to page input  tested manually
