import actions from '../actions'

let testReducer = function(test = [], action) {
  switch (action.type) {
    case "TEST":
      return [{
          "asf": "asdf"
        }, ...test]
    default:
      return test;
  }
}

export default testReducer
