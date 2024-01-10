import './Main.css'
import { ContactsBody } from './components/ContactsBody'
import { ContactsInput } from './components/ContactsInput'

export const Main = () => {
    return <main className="main">
        <ContactsInput />
        <ContactsBody />
    </main>
}
