import { useEffect, useState } from 'react';
import supabase from '../supabase';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null); // To store user information

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase.from('posts').select('*');
        if (error) {
          throw new Error(error.message);
        }
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // Function to handle the sign-in process
  const handleSignIn = async () => {
    try {
      const { user, error } = await supabase.auth.signIn({
        provider: 'google', 
      });
      if (error) {
        throw new Error(error.message);
      }
      setUser(user); // Store the user information in the state
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div>
      <h2>Posts</h2>

      {/* Display sign-in button if the user is not logged in */}
      {!user ? (
        <button onClick={handleSignIn}>Sign In</button>
      ) : (
        <p>Welcome, {user.email}</p>
      )}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
