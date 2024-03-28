import { useState } from "react"
import TableRow from "../TableRow/TableRow"
import TableAction from "../TableAction/TableAction"
import Pagination from "../Pagination/Pagination"
import usePagination from "../../hooks/usePagination"

const Table = ({
  data,
  setSearchInput,
  entriesPerPage,
  setEntriesPerPage,
}: {
  data: any;
  setSearchInput: any;
  entriesPerPage: number;
  setEntriesPerPage: any;
}) => {
  const [page, setPage] = useState(1);
  const { slice, range } = usePagination({ data, page, entriesPerPage });

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue)
  }

  return (
    <>
      <TableAction
        search={ searchItems }
        entriesPerPage={ entriesPerPage }
        setEntriesPerPage={ setEntriesPerPage }
      />

      <div className="table-head-row">
        <div className="head">
          ID
        </div>
        <div className="head">
          Title
        </div>
      </div>

      <div className="table-data-row">
        <div className="data">
          { slice.map(({id, title}) => (
            <TableRow
              key={ id }
              id={ id }
              title={ title }
            />
          )) }
        </div>
      </div>

      <Pagination 
        range={ range }
        slice={ slice }
        setPage={ setPage }
        page={ page }
      />
    </>
  )
}
export default Table