import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

const Login = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        username: '',
        password: '',
      });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('/api/auth/login/route', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: user.username,
            password: user.password
          }),
        });

        const data = await response.json();
        console.log(data);
  
        if (response.ok) {
          console.log('Sikeres bejelentkezés');
          router.push('/homepage')
        } else {
          console.log('Sikertelen bejelentkezés');
        }
      } catch (err) {
        console.error('Hiba a hálózati kérés során:', err);
      }

};
  return (
    <div className="flex items-center justify-center bg-slate-800 rounded-3xl p-8 bg-opacity-60 w-96">
      <div className="max-w-2xl w-full">
        <form
          onSubmit={handleLogin}
          className="rounded-lg shadow-md max-w-md"
        >
          <h1 className="text-3xl font-bold text-center text-white mb-6">
            Bejelentkezés
          </h1>
          <div className="mb-4 relative bg-none">
            <input
              type="text"
              placeholder="Felhasználónév"
              value={user.username}
             onChange={(e) =>
                 setUser((prevUser) => ({ ...prevUser, username: e.target.value }))}
              required
              className="w-full h-10 px-4 border-2 rounded-md focus:outline-none border-white-300 text-black"
            />
            <FaUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-lg text-gray-400" />
          </div>
          <div className="mb-4 relative">
            <input
              type="password"
              placeholder="Jelszó"
              value={user.password}
              onChange={(e) =>
                setUser((prevUser) => ({ ...prevUser, password: e.target.value }))}
              required
              className="w-full h-10 px-4 border-2 border-white-300 rounded-md focus:outline-none text-slate-700"
            />
            <RiLockPasswordFill className="absolute right-4 top-1/2 transform -translate-y-1/2 text-lg text-gray-400" />
          </div>
          <button
            type="submit"
            className="w-full h-10 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-md focus:outline-none hover:from-blue-800 hover:to-blue-500 transition duration-300"
          >
            Bejelentkezés
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
