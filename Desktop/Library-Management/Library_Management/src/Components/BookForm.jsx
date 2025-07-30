import React from 'react'
const inputStyle = {
  marginLeft: '10px',
  padding: '0.4rem',
  fontSize: '1rem',
  borderRadius: '6px',
  border: '1px solid #aaa',
  backgroundColor: '#000000ff',
  color: 'wheat',
  width: '70%',
  alignSelf: 'center',
  textAlign: 'center'
}
function BookForm({book, setBook, handleSubmit, error}) {
  function handleChange(key, value) {
    setBook(prev => ({...prev, [key]: value}))
  }
  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap:'0.3rem'}}>
      {error && <p style={{ color: 'red'}}>{error}</p>}
      <input style={inputStyle} type="text" placeholder='Title' value={book.title} onChange={(e) => handleChange('title', e.target.value)} required/> <br/>
      <input style={inputStyle}  type="text" placeholder='Author' value={book.author} onChange={(e) => handleChange('author', e.target.value)} required/> <br/>
      <input style={inputStyle}  type="text" placeholder='Category' value={book.category} onChange={(e) => handleChange('category', e.target.value)} required/> <br/>
      <textarea style={{...inputStyle, resize: 'none'}}  placeholder='Description' value={book.description} onChange={(e) => handleChange('description', e.target.value)} required/> <br/>
      <input style={inputStyle}  type="number" max='5' min='1' placeholder='Rating' value={book.rating} onChange={(e) => handleChange('rating', e.target.value)} required/> <br/>
      <button style={{width: '200px', alignSelf: 'center'}} type='submit'>Add Book</button>
    </form>
  )
}

export default BookForm