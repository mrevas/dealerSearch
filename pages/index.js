import ResultsTable from "../components/ResultsTable";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import {useState, useMemo} from 'react'
import { useStateContext } from "../components/DealerProvider";
import {v4 as uuidv4} from 'uuid'

let PageSize = 50;


export default function Results() {
  const globalState = useStateContext()
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return globalState.filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, globalState.filteredData]);


    return (
        <div onClick={() => console.log(currentTableData)}>
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={globalState.filteredData.length}
              pageSize={PageSize}
              onPageChange={page => setCurrentPage(page)}
            />
            <Search />
            <ResultsTable currentTableData={currentTableData} />
        </div>
    )
}