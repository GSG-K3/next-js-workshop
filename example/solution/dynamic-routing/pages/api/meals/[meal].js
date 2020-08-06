export default (req, res) => {
  const {
    query: { meal },
  } = req

  res.end(`Meal Name: ${meal}`)
}