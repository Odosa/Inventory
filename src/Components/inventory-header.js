import PropTypes from 'prop-types'
import HeaderButton from './header-button'

const Header = ({username, rank, onAdd, showAdd}) => {

    return (
        <header>
            <h1>{`Welcome ${username}`}</h1><h3 style={rankStyle}>{`(${rank})`}</h3>
            <HeaderButton onClick={onAdd} color={showAdd ? 'red' : 'black'} text={showAdd ? 'Close' : 'Add Item'} /> 
        </header>
    )
}

Header.defaultProps = {
    username: 'User',
    rank: 'Admin'
}

Header.propTypes = {
    username: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired
}

const rankStyle = {
    color: 'red'
}

export default Header