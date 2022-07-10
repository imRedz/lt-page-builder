export function dataBuilder(dataSetter) {
  let data = {}

  dataSetter.map((item) => (
    data = { ...data, [item.name]: item.value }
  ))

  return data
}