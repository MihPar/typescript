type TypeUser = {
  name: string;
  age: number;
};

let user: TypeUser = {
  name: "Mickhael",
  age: 34,
};

type TypeAddress = {
    city: string,
    street: string
}

let address: TypeAddress

address = {
    city: 'Moscow',
    street: 'Novay'
}

let common: TypeUser & TypeAddress = {
    ...user, ...address 
}
