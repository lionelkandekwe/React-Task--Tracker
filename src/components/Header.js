import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title }) => {
  const onClick = () => {
    console.log('click')
  }
  return (
    <div>
      <header className="header">
        <h1>{title} </h1>
        <Button onClick={onClick} color="green" text="Add" />
      </header>
    </div>
  )
}
Header.defaultProps = {
  title: 'Task-Tracker',
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// css Js
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }
export default Header
