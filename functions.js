/*
Ameen Al BAwrani 
June 17, 2020

*/
// This function returns a random number between (and including both) minimum and maximum
function getRandomInteger (minimum, maximum) {
  minimum = Math.ceil(minimum) // minimum is inclusive
  maximum = Math.floor(maximum + 1) // maximum is exclusive so we add one
  return Math.floor(Math.random() * (maximum - minimum)) + minimum
}

const nouns = ['dragons', 'toasters', 'tv', 'iphone', 'oven', 'window', 'camera', 'laptop', 'table', 'chair']

const verbs = ['walked', 'ran', 'clean', 'arrange', 'ask', 'avoid', 'buy', 'cross', 'care', 'achieve']

const adverbs = ['menacingly', 'intentionally', 'highly', 'delightfully', 'honestly', 'ultimately', 'roughly', 'unexpectedly', 'obedienltly', 'nicely']

const adjectives = ['wild', 'slippery', 'beautiful', 'gentle', 'kind', 'skinny', 'bald', 'fancy', 'handsome', 'gorgeous']

const proNouns = ['they', 'we', 'you', 'he', 'she', 'I', 'it']

const jobs = ['designer', 'artist','doctor', 'teacher', 'writer', 'accountant', 'counselor', 'programmer', 'trainer', 'actor']

const games = ['curling', 'softball', 'football', 'tennes', 'vollyball', 'archery', 'boxing', 'hockey', 'yoga', 'skateboarding'] 
   
const fruites = ['banana', 'apple', 'orange', 'melon', 'strawberry', 'mango', 'cherry', 'apricot', 'kiwi', 'grape']

const colours = ['red', 'yello', 'green', 'blue', 'orange', 'brown', 'grey', 'black',' white', 'teal']

const canada = ['ontario', 'quebec', 'british columbia', 'nova scotia', 'new brunswick', 'manitoba', 'saskatchewan', 'alberta', 'yukon', 'nunavut']



function createRandomSentence(){
  const createRandomSentence = nouns[ getRandomInteger(0, nouns.length - 1)] +' '+
  verbs[getRandomInteger(0, verbs.length - 1)] + ' ' +
  adverbs[getRandomInteger(0, adverbs.length - 1)] + ' ' +
  adjectives[getRandomInteger(0, adjectives.length - 1)] + ' ' +
  proNouns[getRandomInteger(0, proNouns.length - 1)] + ' ' +
  jobs[getRandomInteger(0, jobs.length - 1)] + ' ' +
  games[getRandomInteger(0, games.length - 1)] + ' ' +
  fruites[getRandomInteger(0, fruites.length - 1)] + ' ' +
  colours[getRandomInteger(0, colours.length - 1)] + ' ' +
  canada[getRandomInteger(0, canada.length - 1)] + '\.' 
return randomSentence
}

  function outputSentence(sentence){
    console.log('\n')
    console.log(sentence)
  }

  const number0sentence = 10
  for(let i = 0; i < number0sentence; i++){
    outputSentence(createRandomSentence())
  }



