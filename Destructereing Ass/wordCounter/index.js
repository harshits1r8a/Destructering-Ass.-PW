const str = "You are building a word count generator that will take a large string of text as input and output the words andthe number of times they are present in the string. Your task is to write a function that can count theoccurrences of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and spaces."
// const words = str.toLowerCase().split(' ')
// console.log(words);


function wordCounter(str){
    const words = str.toLowerCase().split(' ')
    const count = new Map()

    for (const word of words) {
        if(count.has(word)){
            count.set(word,count.get(word)+1)
        }
        else{
            count.set(word,1)
        }
    }
    return count
}

console.log(wordCounter(str))