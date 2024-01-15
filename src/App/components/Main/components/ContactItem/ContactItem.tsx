import { useContext } from "react";
import { Contacts } from "../../models/Contacts";
import './ContactItem.css'
import { ContactIdContext } from "../../contexts/ContactIdContext";

type ContactItemProps = {
    item: Contacts,
}

export const ContactItem = ({item}: ContactItemProps) => {
    const {id, firstname, lastname, phone, address} = item;

    const context = useContext(ContactIdContext)
    const handleDeleteClick = context!.handleDelete

    return <li className='contact__item' >
                <div className='item__firstname'>
                    <span className='item__title'>Имя:</span>
                    {firstname}
                </div>
                <div className='item__lastname'>
                    <span className='item__title'>Фамилия:</span>
                    {lastname}
                </div>
                <div className='item__phone'>
                    <span className='item__title'>Телефон:</span>
                    {phone}
                </div>
                <div className='item__address'>
                    <span className='item__title'>Адрес:</span> 
                    {address}
                </div>
                <div className='item__btns'>
                    <button className='btn__delete btn' onClick={() => handleDeleteClick(id)}>Удалить</button> 
                    <button className='btn__edit btn'>Редактировать</button>
                </div> 
            </li>
}

