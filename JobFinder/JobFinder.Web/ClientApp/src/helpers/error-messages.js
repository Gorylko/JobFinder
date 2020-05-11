export const errorMessages = {
    IsLengthOptimal
}

function IsLengthOptimal(string){
    return string.length <= 5 
    ? 'Необходимо ввести данные' 
    : 'Правильно'
}