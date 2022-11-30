export const getVisibleContacts = (contacts, filter) => {
  console.log(filter);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};