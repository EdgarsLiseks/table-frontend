const Footer = () => {
  const date = new Date();
  let year = date.getFullYear()

  return (
    <div className="footer">
      Developed by E.Liseks version: <span>0.0.1</span> year: <span>{ year }</span>
    </div>
  )
}
export default Footer