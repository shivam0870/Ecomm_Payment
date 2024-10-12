// import React, { useContext } from 'react'
// import AppContext from '../../context/AppContext'

// const Profile = () => {
//     const {user} = useContext(AppContext);
//   return (
//     <>
//     <div className="container text-center my-5">
//         <h1>Welcome, {user?.name}</h1>
//         <h3>{user?.email}</h3>
//     </div>
//     </>
//   )
// }

// export default Profile
import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
// import './Profile.css'; // Import the CSS file
import '../../index.css'

const Profile = () => {
    const { user } = useContext(AppContext);
    
    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <img src="https://i.pinimg.com/originals/44/7c/7b/447c7bab41aecbf0131837f92feed893.jpg" alt="Profile" className="profile-image" />
                    <h1>Welcome, {user?.name}</h1>
                    <h3>{user?.email}</h3>
                </div>
                <div className="profile-content">
                    <p>This is your profile card where you can manage your account details.</p>
                   
                </div>
            </div>
        </div>
    );
}

export default Profile;
