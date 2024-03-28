import { useEffect, Key } from "react"

const Pagination = ({ range, setPage, page, slice} : { range: any, setPage: any, page: number, slice: any}) => {
  
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage])

  return (
    <div className="table-pagination">
      {range.map((el: string, index: Key) => (
        <div
          key={index}
          className={page.toString() == el ? 'pagination-btn active' : 'pagination-btn'}
          onClick={() => setPage(el)}
        >
          { el }
        </div>
      ))}
  </div>
  )
}
export default Pagination