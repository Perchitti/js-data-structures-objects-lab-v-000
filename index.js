// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, { [key]: value})
}
const updatedDriver = updateDriverWithKeyAndValue(driver, name, address);
