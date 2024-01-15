export type Contacts = {
    id: string,
    firstname: string,
    lastname: string,
    phone: string,
    address: string, 
}

export type ContactsDto = {
    address: {
        geolocation: {
            lat: string,
            long: string
        },
        city: string,
        street: string,
        number: number,
        zipcode: string
    },
    id: number,
    email: string,
    username: string,
    password: string,
    name: {
        firstname: string,
        lastname: string
    },
    phone: string,
    __v: number
}