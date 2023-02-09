import React from 'react'
import '../css/ProfileScreen.css'
import Navbar from './Navbar'
import avatar from '../images/Netflix-avatar.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'



function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
      <>
      <Navbar />
        <div className='profileScreen'>
            <div className='profileScreen__body'>
                <h1 className='profileScreen__heading'>Edit Profile</h1>
                    <div className='profileScreen__info'>
                        <div>
                    <img src={avatar} alt="" className='avatar__image' />
                            
                    </div>
                    <div className='profileScreen__details'>
                        <h2>{user.email}</h2>
                        <button onClick={()=> auth.signOut()} className='btn profileScreen__signOut'>SignOut</button>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

export default ProfileScreen