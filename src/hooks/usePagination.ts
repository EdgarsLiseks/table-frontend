import { useState, useEffect } from "react"

const calculateRange = ({data, entriesPerPage} : {data: any, entriesPerPage: number}) => {
  const range: number[] = [];
  const num: number = Math.ceil(data.length / entriesPerPage)

  for (let i = 1; i <= num; i++) {
    range.push(i)
  }

  return range;
}

const sliceData = ({data, page, entriesPerPage} : {data: any, page: number, entriesPerPage: number}) => {
  return data.slice((page - 1) * entriesPerPage, page * entriesPerPage);
};

const usePagination = (
  {data, page, entriesPerPage } : {
    data: any,
    page: number,
    entriesPerPage: number
  }) => {
    const defaultRange: any[] = []
    const defaultSlice: any[] = []
    const [tableRange, setTableRange] = useState(defaultRange)
    const [slice, setSlice] = useState(defaultSlice)

    useEffect(() => {
      const range = calculateRange({data, entriesPerPage});
      setTableRange([...range]);

      const slice = sliceData({data, page, entriesPerPage});
      setSlice([...slice]);
    }, [data, setTableRange, page, setSlice])

    return { slice, range: tableRange}
}

export default usePagination
