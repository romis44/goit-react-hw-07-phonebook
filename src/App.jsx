import Layout from './components/Layout/Layout';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';

export default function App() {
  return (
    <Layout>
      <h1 className="title">Phonebook</h1>
      <ContactForm />

      <h2 className="title">Contacts</h2>
      <Filter />

      <ContactList />
    </Layout>
  );
}
