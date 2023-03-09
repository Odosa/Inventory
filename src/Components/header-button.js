import PropTypes from 'prop-types'

const HeaderButton = ({color, text, onClick}) => {
    return <button onClick={onClick} style={{backgroundColor : color}} className='btn'>{text}</button>
}

HeaderButton.defaultProps = {
    color : 'steelblue'
}

HeaderButton.propTypes = {
    text : PropTypes.string,
    color : PropTypes.string,
    onClick : PropTypes.func,
}

export default HeaderButton