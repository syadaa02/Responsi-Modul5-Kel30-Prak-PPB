import React, { useState, useEffect } from "react";
import "./Profile.css";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {        
        const usernames = ["Asih001", "syadaa02", "mazrohaaniss", "Farrelino77"];
        const responses = await Promise.all(
          usernames.map(username => axios.get(`https://api.github.com/users/${username}`))
        );
        
        const users = responses.map(response => response.data);
        setUserData(users);
      } catch (error) {
        setError("Error fetching user data");
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profil Anggota</h1>
      <div className="profile-list">
        {userData.map((user) => (
          <div key={user.id} className="profile-card">
            <img 
              src={user.avatar_url || "https://via.placeholder.com/150"} 
              alt={user.login} 
              className="profile-image" 
            />
            <h2 className="profile-name">{user.name || user.login}</h2>
            <p className="profile-followers">{user.followers || "N/A"} Followers</p>
            <a 
              href={user.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="profile-link"
            >
              GitHub Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
