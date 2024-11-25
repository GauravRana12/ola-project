import React from 'react'

const Blogs = () => {
  return (
    <div className='mainBlogs'>
        <h1>Recent from our blogs</h1>
        <div>
        <div>
            <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/pli-agreement.png" alt="Blog1" />
            <h3>Ola signs PLI agreement</h3>
            <p>know more →</p>
        </div>
        <div>
            <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ola-to-invest.png" alt="Blog1" />
            <h3>Ola to invest $500 million</h3>
            <p>know more →</p>
        </div>
        <div>
            <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/indigenous-cell.png" alt="Blog1" />
            <h3>India's first indigenous cell</h3>
            <p>know more →</p>
        </div>
        </div>
    </div>
  )
}

export default Blogs