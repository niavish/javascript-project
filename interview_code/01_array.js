//Print the original values of array
// Original properties : array ke protype ko use krte huye aapne usme kuch additional properties insert ki h?

Array.prototype.extraProperty = "Neha"

const arr= [10,20,30,40,50]

for (let v in arr) {
    if (arr.hasOwnProperty(v))
    console.log(v);
}