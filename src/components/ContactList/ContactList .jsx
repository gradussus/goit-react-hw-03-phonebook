import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: #ffd1e0;
  border-radius: 10px;
  padding: 25px;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  width: 100%;
  text-align: start;
`;
const DeleteBtn = styled.button``;
export const ContactList = ({ contacts, deleteCont }) => {
  return (
    <List>
      {contacts.map(cont => (
        <Item key={cont.id}>
          <span>{cont.name}</span>
          <span>{cont.number}</span>
          <DeleteBtn id={cont.id} onClick={deleteCont}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
