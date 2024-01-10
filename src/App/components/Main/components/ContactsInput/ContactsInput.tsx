import { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Contacts } from '../../models/Contacts';
import './ContactsInput.css'

export const ContactsInput = () => {
    const [data, setData] = useState<Contacts[]>([]);

    const inputFirstnameRef = useRef<HTMLInputElement>(null);
    const inputLastnameRef = useRef<HTMLInputElement>(null);
    const inputPhoneRef = useRef<HTMLInputElement>(null);
    const inputAddressRef = useRef<HTMLInputElement>(null);
    
    
    const handleAddContacts = () => {

        const inputFirstname = inputFirstnameRef.current;
        const inputLastname = inputLastnameRef.current;
        const inputPhone = inputPhoneRef.current;
        const inputAddress = inputAddressRef.current;

        setData([...data, {
            id: uuidv4(),
            firstname: inputFirstname?.value ?? '',
            lastname: inputLastname?.value ?? '',
            phone: inputPhone?.value ?? '',
            address: inputAddress?.value ?? '', 
        }])

        inputFirstname!.value = '';
        inputLastname!.value = '';
        inputPhone!.value = '';
        inputAddress!.value = '';

        console.log(data)
    }

    return <div className='contact__input'>
                <div className='contact__input__firstname'>
                    <span className='input__title'>Имя:</span>
                    <input ref={inputFirstnameRef} className='input__firstname' type='text' name='firstname'/>
                </div>
                <div className='contact__input__lastname'>
                    <span className='input__title'>Фамилия:</span>
                    <input ref={inputLastnameRef} className='input__lastname' type='text' name='lastname'/>
                </div>
                <div className='contact__input__phone'>
                    <span className='input__title'>Телефон:</span>
                    <input ref={inputPhoneRef} className='input__phone' type='text' name='phone'/>
                </div>
                <div className='contact__input__address'>
                    <span className='input__title'>Адрес:</span>
                    <input ref={inputAddressRef} className='input__address' type='text' name="address"/>
                </div>
                <button className='btn__add btn' onClick={handleAddContacts}>Добавить контакт</button>
            </div>
}
