import { useRef} from 'react'
import './ContactsInput.css'

type ContactsInputProps = {
    onAddContacts: (
        valueFirstname: string,
        valueLastname: string,
        valuePhone: string,
        valueAddress: string,
    ) => void
}

export const ContactsInput = ({ onAddContacts }: ContactsInputProps) => {

    const inputFirstnameRef = useRef<HTMLInputElement>(null);
    const inputLastnameRef = useRef<HTMLInputElement>(null);
    const inputPhoneRef = useRef<HTMLInputElement>(null);
    const inputAddressRef = useRef<HTMLInputElement>(null);
    
   const handleAddContacts = () => {
        const inputFirstname = inputFirstnameRef.current;
        const inputLastname = inputLastnameRef.current;
        const inputPhone = inputPhoneRef.current;
        const inputAddress = inputAddressRef.current;

        onAddContacts(inputFirstname!.value, inputLastname!.value, inputPhone!.value, inputAddress!.value);

        inputFirstname!.value = '';
        inputLastname!.value = '';
        inputPhone!.value = '';
        inputAddress!.value = '';
    }

    return <div className='contact__input'>
                <div className='contact__input__firstname'>
                    <span className='input__title'>Имя:</span>
                    <input ref={inputFirstnameRef} className='input__firstname contact__input' type='text' name='firstname'/>
                </div>
                <div className='contact__input__lastname'>
                    <span className='input__title'>Фамилия:</span>
                    <input ref={inputLastnameRef} className='input__lastname contact__input' type='text' name='lastname'/>
                </div>
                <div className='contact__input__phone'>
                    <span className='input__title'>Телефон:</span>
                    <input ref={inputPhoneRef} className='input__phone contact__input' type='text' name='phone'/>
                </div>
                <div className='contact__input__address'>
                    <span className='input__title'>Адрес:</span>
                    <input ref={inputAddressRef} className='input__address contact__input' type='text' name="address"/>
                </div>
                <button className='btn__add btn' onClick={handleAddContacts}>Добавить контакт</button>
            </div>
}
