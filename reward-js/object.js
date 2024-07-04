function findAddress(objs){

  const street = objs.street || "__"
  const house = objs.house || "__"
  const society = objs.society || "__"

  let str = street+ ',' + house+ ','  + society
  return str
}
  


let address = findAddress({street:10, house:'15A',  society: 'Earth'})
console.log(address)