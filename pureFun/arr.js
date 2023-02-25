export const arrToObj = (arr, keyField) => {
  const  obj = {}
  if (!Array.isArray(arr)) {
    return obj
  }
  arr.forEach((item, index) => {
    const key = item[keyField] || index
    obj[key] = item
  })
  return obj
}
