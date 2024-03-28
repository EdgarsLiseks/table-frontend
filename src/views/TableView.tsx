import { useState, useEffect } from "react"
import Table from "../components/Table/Table"

const TableView = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10)
  const [events, setEvents] = useState('')
  const [loading, setLoading] = useState(true)
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api')
        const data = await res.json()
        
        if (searchInput.length > 1) {
          const filteredData = data.filter((entry: any) => {
            if (entry.title.includes(searchInput)) {
              return entry
            }
          })

          setEvents(filteredData)
          setLoading(false)
        } else {
          setEvents(data)
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchEvents()
  }, [searchInput, setSearchInput, entriesPerPage, setEntriesPerPage])

  return (
    <section className="container">
      <Table 
        data={ events }
        setSearchInput={ setSearchInput }
        entriesPerPage={ entriesPerPage }
        setEntriesPerPage={ setEntriesPerPage } />
    </section>
  )
}
export default TableView