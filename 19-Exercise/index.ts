type user = {
    readonly id: number, 
    name: string, 
    hobby: string
    is_married: boolean
}

let user_1: user  = {
    id: 1, 
    name: "Salman", 
    hobby: "Watching movies", 
    is_married: true 
}

let user_2: user  = {
    id: 2, 
    name: "Marry", 
    hobby: "Cooking", 
    is_married: false 
}

console.log(user_1)
console.log(user_2)