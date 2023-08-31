type TypeChanalReturn = {
	name:string
}

function getChanal(name:string):TypeChanalReturn {
	return {name}
}
getChanal('Red Group')

type TypeChannelFunciton = (name: string) => TypeChannelReturn 
const getNewChanalName: TypeChannelFunciton = name => {
	return {name}
}

const getNumbers = (...numbers: number[]) => {
	return numbers[0]
} 