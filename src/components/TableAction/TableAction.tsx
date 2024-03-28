const TableAction = ({
  search,
  entriesPerPage,
  setEntriesPerPage
}: {
  search: any;
  entriesPerPage: number;
  setEntriesPerPage: any;
}) => {
  const defaultValues: number[] = [10, 30, 50]

  const handleChange = (value: number) => {
    setEntriesPerPage(value)
  }

  return (
    <>
      <div className="table-action">
        <div className="search">
          <input 
            type="text"
            placeholder="Search:"
            onChange={(e) => search(e.target.value)} 
          />
        </div>

        <div className="entries-switcher">
          <div className="entries-action">
            {
              defaultValues.map((value, index) => {
                return (
                  <div 
                    key={ index }
                    className={ entriesPerPage == value ? 'btn active' : 'btn'}
                    onClick={() => handleChange(value)}
                  >
                    { value }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
export default TableAction