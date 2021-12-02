 
function calculadora(cadena) {
    // if (cadena.includes('-')) {
    //     let resta= cadena.split('-')
    //     return parseInt(resta[0]) - parseInt(resta[1])
    // }

    if (cadena == "") {
        return 0
    }
    else {
        let rsl = 0
        let elem = cadena.split('+')
        elem.forEach(element => {
            if (element.includes('-')) {
                rsl += resta(element)
            }  else {
                rsl += parseInt(element)
            }
        });
        return rsl
    }
  }
  
function resta(element) {    
    let resta= element.split('-')
    return parseInt(resta[0]) - parseInt(resta[1])
}

export default calculadora


// > "2+3".split('+')
// [ '2', '3' ]
// > parseInt('2')
// 2
// [ '2', '3' ].forEach(function(e){console.log(e)})
// 2
// 3
// > "2+3".indexOf('+')
// 1
// > "2+3".indexOf('-')
// -1
// > parseInt('')
// NaN
