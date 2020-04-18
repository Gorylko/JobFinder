export const errorMessages = {
    IsLengthOptimal
}

function IsLengthOptimal(string){
    return string.length <= 5 
    ? 'Need to enter data' 
    : 'right'
}