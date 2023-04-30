function fstsndtdr(...arr){
    [a,b,...c]=arr
    return [a,b,c[c.length-1]]
}

console.log(fstsndtdr(1,3,2,6,3,7,98));