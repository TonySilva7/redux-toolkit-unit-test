type Name = {
	title: string;
	first: string;
	last: string;
};

type Location = {
	street: { number: number; name: string };
	city: string;
	state: string;
	country: string;
	postcode: string;
	coordinates: { latitude: number; longitude: number };
	timezone: { offset: string; description: string };
};

type Login = {
	uuid: string;
	username: string;
	password: string;
	salt: string;
	md5: number;
	sha1: string;
	sha256: string;
};

type DobAndRegister = {
	date: string;
	age: number;
};

type Id = {
	name: string;
	value: string;
};

type Picture = {
	large: string;
	medium: string;
	thumbnail: string;
};

export default interface IPatient {
	gender: string;
	name: Name;
	location: Location;
	email: string;
	login: Login;
	dob: DobAndRegister;
	registered: DobAndRegister;
	phone: string;
	cell: string;
	id: Id;
	picture: Picture;
	nat: string;
	status: string;
}
