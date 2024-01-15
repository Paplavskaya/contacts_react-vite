import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Main.css'
import { ContactsBody } from './components/ContactsBody'
import { ContactsInput } from './components/ContactsInput'
import { Contacts, ContactsDto } from './models/Contacts';
import { ContactsDataMaper } from './utils/mapper';
import { ContactIdContext } from './contexts/ContactIdContext'

export const Main = () => {
    const [data, setData] = useState<Contacts[]>([]);

    const handleAddContacts = (inputValueFirstname: string, inputValueLastname: string, 
                                inputValuePhone: string, inputValueAddress: string) => {
                                    setData ([...data,
                                                {id: uuidv4(),
                                                firstname: inputValueFirstname,
                                                lastname: inputValueLastname,
                                                phone: inputValuePhone,
                                                address: inputValueAddress,} 
                                    ])
    }

    const handleDelete = (idContact: string) => {
        const filterData = data.filter(({id})=> id !== idContact);
        setData(filterData)
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/users')
        .then(response => response.json())
        .then((serverData: ContactsDto[]) => {
            setData(ContactsDataMaper(serverData))
        })
    }, [])

    return <ContactIdContext.Provider value={{handleDelete}}>
        <main className="main">
            <h1 className='main__title'>Список контактов</h1>
            <ContactsInput onAddContacts={handleAddContacts}/>
            <ContactsBody data={data}/>
        </main>
    </ContactIdContext.Provider>
    
}
