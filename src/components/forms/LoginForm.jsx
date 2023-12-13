const LoginForm = ({ onSubmit, setUser, setPass }) => {
  return (
    <form onSubmit={onSubmit} className="max-w-sm mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Nombre de usuario"
          onChange={(e) => setUser(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPass(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:bg-blue-700"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

export default LoginForm;
