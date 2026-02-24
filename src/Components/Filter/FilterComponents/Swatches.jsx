import './Swatches.css'

const Swatches = ({filterName, onChange, type}) => {
    console.log(filterName, type)
    return (
        <li 
            className={`${type}-option`} 
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