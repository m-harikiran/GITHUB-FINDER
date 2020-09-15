import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
    //Using useState for state as we have changed the class based component to function based componenet
    const [text, setText] = useState('');

    const onChange = (e) => {
        // this.setState({ text: e.target.value })
        setText(e.target.value) //same as above
    }

    const onSubmit = (e) => {
        e.preventDefault();
        //Adding trim to remove all white spaces 
        if (text.trim() === '') {
            setAlert('Please enter someting', 'light');
        } else {
            searchUsers(text)
            setText('')
        }

    } //make onSubmit as arrow function if you dont want to use bind.

    return (
        <div>
            <form onSubmit={onSubmit} className='from'>
                <input type='text' name='text' placeholder='Searh Users...' value={text} onChange={onChange} />
                <input type='submit' value='Search' className='btn btn-dark btn-block' />
            </form>
            {showClear && <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>}
        </div>
    )

}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}
export default Search
