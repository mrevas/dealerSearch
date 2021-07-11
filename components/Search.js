import { Navbar, Form, FormControl } from "react-bootstrap";
import { useStateContext } from "./DealerProvider";
import Pagination from "./Pagination";


const Search = (props) => {

  const globalState = useStateContext()

  //gets the value of the input and conducts a search through all 6 arrays
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();

    let first = [];
    let last = []
    let year = []
    let make = []
    let model = []
    let dealer = []

    let result = []


    first = globalState.allData.filter((data) => {
      return data.FirstName.toLowerCase().search(value) != -1;      
    })
    last = globalState.allData.filter((data) => {
      return data.LastName.toLowerCase().search(value) != -1;      
    })
    year = globalState.allData.filter((data) => {
      return data.ModelYear.toLowerCase().search(value) != -1;      
    })
    make = globalState.allData.filter((data) => {
      return data.Make.toLowerCase().search(value) != -1;      
    })
    model = globalState.allData.filter((data) => {
      return data.Model.toLowerCase().search(value) != -1;      
    })


    result.push(...last)
    result.push(...first)
    result.push(...year)
    result.push(...make)
    result.push(...model)

    globalState.setFilteredData(result);
  }

  const handleDealership = (event) => {
    let value = event.target.value;
    globalState.setDealership(value)

  }

  return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Dealer Search</Navbar.Brand>
          <Form inline onSubmit={e => e.preventDefault()}>
          <label htmlFor="search">Search by Model, Make, Year, First, or Last Name</label>
            <FormControl id="search" type="text" placeholder="Search" className="mr-sm-2" onChange={event => handleSearch(event)} />
            <select name="dealership" id="dealership" onChange={event => handleDealership(event)}>
              <option value="">Any Dealership</option>
              <option value="buffalo">Buffalo John&apos;s Wild Dealership</option>
              <option value="cdjr">Definitely not a potato CDJR</option>
              <option value="jamitami">Jamitami Hyundai</option>
              <option value="premium">Premium High Quality Autos</option>
              <option value="wehaulit">WeHaulIt Automotive</option>
            </select>
          </Form>
      </Navbar>
  )
}

export default Search