function empty<T>(arg: T): T {
	return arg
}
empty<number>(5)
empty<string>('Hello typescript')

class Channel<T> {
	private name: T
	constructor(name: T) {
		this.name = name
	}
	getName(): T {
		return this.name
	}
}

new Channel<string>("Hello typescript")
new Channel<number>(3000)

const emptyTwo = <T>(args:T): T => {
	return args
}

emptyTwo<number>(3000)
emptyTwo<string>('Hello typescript')

interface IPair<K, V> {
	key: K,
	value: V
}

const pariOne: IPair<string, number> = {
	key: '1',
	value: 1,
} 

const pariTwo: IPair<number, number>  = {
	key: 1,
	value: 2
}