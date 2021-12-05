class MapObj {
  constructor () {
    this.map = {}
  }

  createMap (obj) {
    const keys = Object.keys(obj)
    const vals = Object.values(obj)
    for (let i = 0; i < keys.length; i++) {
      this.insertPair(keys[i], vals[i])
      this.insertPair(vals[i], keys[i])
    }
  }

  insertPair (k, v) {
    this.map[k] = v
  }

  getMap () {
    return this.map
  }

  getEntry (v) {
    return this.map[v]
  }

}

const EMPLOYEES = {
  'Sarah Connor': '42',
  'John Connor': '77',
  'Batman': '44',
  'Joker': '13',
  'Donald Duck': '64'
}

const employeeMap = new MapObj()

employeeMap.createMap(EMPLOYEES)

const employees = employeeMap.getMap()
console.log('employee map obj: ', employees)

console.log('Joker ID: ', employees['Joker'])
console.log('Name of employee with ID 13: ', employees['13'])
console.log('Name of employee with ID 42: ', employees['42'])
console.log('ID # of Sarah Connor: ', employees['Sarah Connor']) 
