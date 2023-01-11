var file = '../res/text.txt'

export const text = file.readFile("./mytext.txt", function(text){
  var textByLine = text.split("\n")
});