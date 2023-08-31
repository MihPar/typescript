class Car {
	name: string
	price: number
	constructor(name: string, price: number) {
		this.name = name
		this.price = price
	}
	public getInfo(): string {
		return `${this.name} - ${this.price}`
	}
	anything() {
		return this.getInfo()
	}
}
new Car('BMW', 1000).getInfo( )