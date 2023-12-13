function UserEditSettingsForm({ userSettings, onChange, onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="bg-white px-8 pt-6 pb-8 mb-4">
            {/* Ciudad */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Ciudad</label>
                <input
                    name="city"
                    type="text"
                    value={userSettings.city}
                    onChange={onChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            {/* Intereses */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Intereses</label>
                <input
                    name="interests"
                    type="text"
                    value={userSettings.interests}
                    onChange={onChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            {/* Checkbox */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Permitir recibir ofertas</label>
                <input
                    name="allowsOffers"
                    type="checkbox"
                    checked={userSettings.allowsOffers}
                    onChange={onChange}
                />
            </div>

            {/* Botón para guardar cambios */}
            <div className="flex justify-between">
                <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:bg-blue-600">
                    Guardar cambios
                </button>
            </div>
        </form>
    );
}

export default UserEditSettingsForm;