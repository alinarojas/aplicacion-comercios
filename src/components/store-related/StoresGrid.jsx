import LoadingMessage from "../LoadingMessage";
import MiniStoreWindow from "./MiniStoreWindow";

function StoresGrid({ stores, userType }) {
    if (!stores) {
        return <LoadingMessage/>;
    }

    // Filtra las tiendas que tienen el campo 'completed' como 'true'
    const completedStores = stores.filter(store => store.completed === true);

    // Ordena las tiendas por la nota media (campo 'scoring')
    const sortedStores = completedStores.sort((a, b) => b.scoring - a.scoring);

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl">
                {sortedStores.map(store => (
                    <MiniStoreWindow key={store.id} store={store} userType={userType} />
                ))}
            </div>
        </div>
    );
}

export default StoresGrid;
