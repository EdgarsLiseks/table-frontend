import { useState } from "react"

const TableRow = ({ id, title } : { id: string; title: string}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const enableEdit = () => {
    setIsEditing(true)
  }

  const handleChange = (value: string) => {
    setNewTitle(value)
  }

  const updateTitle = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(`/api/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: id,
          title: newTitle
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      const data = await res.json()
      
      setIsLoading(true)
      setIsEditing(false)

      // Response from mock api
      console.log('Data has been updated:', data)
    } catch (error) {
      console.log(error)
    }
  
  }

  return (
    <>
      <div className={ isEditing ? 'table-row active' : 'table-row'} >
        <div>
          { id }
        </div>
        <div>
          {
            isEditing ? (
              <div>
                <input
                  className={ isEditing ? 'input-text-field selected' : ''}
                  type="text"
                  placeholder={ title }
                  onChange={ (e) => handleChange(e.target.value)}
                />
                <button id={ id } type="submit" onClick={ updateTitle }>
                  { isLoading ? 'Saving...' : 'Save'}
                </button>
              </div>
            ) : (
              <div className="input-text-field" onClick={ enableEdit }>
                { title }
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}
export default TableRow