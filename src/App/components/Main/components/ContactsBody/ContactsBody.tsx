import './ContactsBody.css'
import { ContactItem } from '../ContactItem';
import { Contacts } from '../../models/Contacts';

type DataProps = {
    data: Contacts[];
}

export const ContactsBody = ({data}: DataProps) => {  

    return <>
                {data.length !== 0 ?
                    <ul className='contact__items'>
                        {data.map((item) => <ContactItem key={item.id} item={item}/>)}
                    </ul>:
                    <h2>Нет контактов</h2>
                }
            </>
}