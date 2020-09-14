import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// function UserItem() { or
//Arrow function
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
    // constructor() {
    //     super();
    //     this.state = {
    //         id: 'id',
    //         login: 'mojombo',
    //         avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    //         html_url: 'https://github.com/mojombo'
    //     }

    // deconstructor for this.state
    // const { login, avatar_url, html_url } = props.user   //can be replaced dicrectly by passing into method
    return (
        <div className='card text-center'>
            <img src={avatar_url} alt="" className='round-img' style={{ width: '60px' }} />
            <h3>{login}</h3>

            <div>
                <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>More</Link>
            </div>
        </div>
    )

}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}
export default UserItem
