import { Contacts, ContactsDto } from "../models/Contacts";

export const ContactsDataMaper = (serverData: ContactsDto[]): Contacts[] => {
    return serverData.map(({id, name:{firstname, lastname}, phone, address:{city}}) => {
        return {
            id: id.toString(),
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            address: city, 
        }
    })
}