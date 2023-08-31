interface IUser {
	name: string,
	age: number
}

interface IUserEmail extends IUser{
	email: string
}

const user: IUserEmail = {
	name: 'Mackle',
	age: 41,
	email: 'askdfj@gmail.com'
}

/************************************/

type TypePerson = {
	name: string,
	age: number
}

type TypeUser = {
	telephone: number
}

let userOne: TypePerson & TypeUser = {
	name: "John", 
	age: 30, 
	telephone: 1748312748234738,
}