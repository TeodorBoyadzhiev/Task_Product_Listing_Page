import './Swatches.css'

const Swatches = ({filterName, onChange, type, isActive}) => {
    return (
        <li 
            className={`${type}-option ${isActive ? 'active' : ''}`} 
            data-name={type} 
            data-value={filterName} 
            onClick={onChange}
            style={type === 'colors' ? { backgroundColor: filterName.toLowerCase() } : {}}
        >
            {type === 'colors' ? '' : filterName}
        </li>
    )
}

export default Swatches