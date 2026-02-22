import './Heading.css'


const Heading = () => {
  return (
    <div className='heading-container row row-cols-2'>
        <div className='logo col-4'>Logo</div>
        <div className='categories row row-cols-3'>
            <div className='category'>Category 1</div>
            <div className='category'>Category 2</div>
            <div className='category'>Category 3</div>
            {/* <div className='category'>Category 1</div>
            <div className='category'>Category 2</div>
            <div className='category'>Category 3</div> */}
        </div>
    </div>
  )
}

export default Heading