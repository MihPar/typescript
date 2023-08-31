
let arr: string[] = [
	'one', 'two', 'three'
]

let arrOne: number[]
arrOne = [1, 2, 3]

let arrTwo: Array<string> = ['one', 'two', 'three']

let arrThree: ReadonlyArray<number> = [1, 2, 3]
console.log(arrThree[0])

type TypeArray = [number, string, null]
const newArr: TypeArray = [1, "string", null]