import PropTypes from 'prop-types';

export const Filter = ({ value, changeFilter }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={changeFilter} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
};
