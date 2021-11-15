const temp = [12, 13, 20, 31, 41, 17, 25, 19]
let hot = temp[0]
let cold = temp[0]
for (let i = 0; i < temp.length; i++) {
    if (temp[i] > hot ) {
        hot = temp[i]
    }
    else if (temp[i] < cold) {
        cold = temp[i]
    }
}
console.log(`Najtopliot den e so temperatura od ${hot}`);
console.log(`Najstudeniot den e so temperatura od ${cold}`);


let zbir = 0
let prosecna = 0
for (let i = 0; i < temp.length; i++) {
    zbir = zbir + temp[i]
}
prosecna = zbir / temp.length
console.log(`Prosecnata temperatura e ${prosecna}`);