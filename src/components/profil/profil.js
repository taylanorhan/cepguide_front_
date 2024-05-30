import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../context/GlobalState';
import './profil.css';

const Profile = () => {
  const { user } = useContext(GlobalContext);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        try {
          const response = await axios.get('http://localhost:3000/user/profile', {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
          setProfile(response.data);
        } catch (err) {
          setError('Error fetching profile');
          console.error('Error fetching profile:', err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProfile();
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {profile ? (
        <div className="profile-details">
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Admin:</strong> {profile.isAdmin ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        <p>No profile data available</p>
      )}
    </div>
  );
};

export default Profile;
