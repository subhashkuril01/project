import React from 'react'
import './Campus.css'

const Campus = () => {
  return (
    <section className='campus'>
      <h1>Our Global Campus</h1>
      <p>Embark on a journey of knowledge across our global campuses.</p>
      <div className='row'>
        <div className='campus-col'>
          <img src="/images/london.png" alt="" />
          <div className='layers'>
            <h1>London</h1>
          </div>
        </div>
        <div className='campus-col'>
          <img src="/images/washington.png" alt="" />
          <div className='layers'>
            <h1>Washington</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Campus
