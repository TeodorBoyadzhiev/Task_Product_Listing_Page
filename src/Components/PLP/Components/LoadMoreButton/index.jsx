import './LoadMoreButton.css'

const LoadMoreButton = ({handleLoadMore}) => {
  return (
    <div className="load-more-button btn btn-secondary btn-lg" onClick={handleLoadMore}>
      Load More
    </div>
  )
}

export default LoadMoreButton