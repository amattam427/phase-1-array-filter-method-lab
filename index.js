// Code your solution here
function findMatching(array, string) {
    return array.filter( possibleMatch =>
      possibleMatch.toLowerCase() === string.toLowerCase()
    )
  }
  
  function fuzzyMatch(array, testString) {
    return array.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }
  
  function matchName(array, stringName) {
    return array.filter( record => record.name === stringName)
  }