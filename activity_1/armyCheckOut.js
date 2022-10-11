const conscritos = [
    {
        nome: 'Matheus Dardenne',
        dataNasc: new Date(1991, 7, 9),
        sexo: 'M',
        altura: 1.8
    },
    {
        nome: 'Weverton Santos',
        dataNasc: new Date(2001, 4, 3),
        sexo: 'M',
        altura: 1.7
    },
    {
        nome: 'Bruna Silva',
        dataNasc: new Date(2002, 5, 13),
        sexo: 'F',
        altura: 1.65
    },
    {
        nome: 'Jubiscleiton Nascimento',
        dataNasc: new Date(2003, 9, 26),
        sexo: 'M',
        altura: 1.55
    }
]

/**
 * for create documentation in functions press /**
 */

/**
 * 
 * @param Date date 
 * @returns boolean
 */
const sumDateNasc = ( date ) => {
    const year = new Date().getFullYear() - date.getFullYear()

    if( year >= 18 && year <= 24 ){
        return true
    }
}

/**
 * 
 * @param number height 
 * @param number heightDefault 
 * @returns boolean
 */
const checkHeightPerson = ( height, heightDefault = 1.60 ) => height > heightDefault;

/**
 * 
 * @param { nome: string, dataNasc: Date, sexo: M | F, altura: number } data
 */
const armyCheckOut = ( data ) => {
    if( sumDateNasc(data.dataNasc) && checkHeightPerson(data.altura) && data.sexo == "M" ){
        console.log(`\nSinto muito amigo ${ data.nome }, você irá para o exercito!`)
    } else {
        console.log(`\n${ data.nome }, você está livre!`)
    }
}

conscritos.forEach((item) => {
    armyCheckOut(item);
});