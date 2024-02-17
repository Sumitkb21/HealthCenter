import React from 'react'
import ApolloNavbar from './apolloNavbar';

const ApolloHome = () => {
  

    return (
    <div>
      <ApolloNavbar/>
      <div className='reg'>
        <div className='quotes' style={{textAlign:'center'}}>
        <p style={{textAlign:'center'}}>Your health is an investment, not an expense.</p>
          <p style={{textAlign:'center'}}>Taking care of yourself is part of taking care of your patients.</p>
          <p style={{textAlign:'center'}}>Your health is your most valuable asset. Take care of it</p>
        </div>
    
      </div>       
    </div>
  )
}

export default ApolloHome
