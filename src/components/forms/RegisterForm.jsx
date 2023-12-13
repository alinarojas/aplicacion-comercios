import Link from "next/link";

const RegisterForm = ({
    onSubmit,
    setEmail,
    setPassword,
    setName,
    setAge,
    setCity,
    setInterests,
    setAllowsOffers,
    setConfirmPassword
}) => {
    return (
        <form onSubmit={onSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Registro de usuario</h2>

            <input
                type="text"
                placeholder="Nombre de usuario"
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800 mb-4"
                required
            />

            <input
                type="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800 mb-4"
                required
            />

            <input
                type="password"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800 mb-4"
                required
            />

            <input
                type="password"
                placeholder="Confirmar contraseña"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800 mb-4"
                required
            />

            <input
                type="number"
                placeholder="Edad"
                onChange={(e) => setAge(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800 mb-4"
                min="0"
                required
            />

            <input
                type="text"
                placeholder="Ciudad"
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800 mb-4"
            />

            <input
                type="text"
                placeholder="Intereses"
                onChange={(e) => setInterests(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800 mb-4"
            />

            <label className="flex items-center mb-4 text-gray-800">
                <input
                    type="checkbox"
                    onChange={(e) => setAllowsOffers(e.target.checked)}
                    className="mr-2"
                />
                Permite recibir ofertas
            </label>
            
            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:bg-blue-600">Registrarse</button>
        
            <Link href="/login/user" className="block text-center text-gray-600 hover:text-black mt-4">¿Ya tienes cuenta? Inicia sesión</Link>
        </form>
    );
};

export default RegisterForm;
