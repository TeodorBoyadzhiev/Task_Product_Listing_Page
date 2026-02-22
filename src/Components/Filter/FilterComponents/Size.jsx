import './Size.css'

const Size = () => {
  return (
    <div className="size-wrapper">
        <div className='filter-name row'>Size</div>
        <ul className='size-options row'>
            <li className='size-option small' value='small'>Small</li>
            <li className='size-option medium' value='medium'>Medium</li>
            <li className='size-option large' value='large'>Large</li>
            <li className='size-option xlarge' value='xlarge'>X-Large</li>
        </ul>
    </div>
  )
}

export default Size