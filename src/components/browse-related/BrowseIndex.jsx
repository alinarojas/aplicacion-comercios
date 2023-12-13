import Link from "next/link";
import Image from 'next/image';

function BrowseIndex({ userType }) {

    let urlDir = '';

    switch (userType) {
        case 'user':
            urlDir = '/usertypes/user/browse/';
            break;
        case 'store':
            urlDir = '/usertypes/store/browse/';
            break;
        case 'admin':
            urlDir = '/usertypes/admin/browse/';
            break;
        default:
            urlDir = '/browse/';
            break;
    }

    return (
        <>

            <h2 className="mb-8 text-4xl font-bold text-center text-gray-900">
                ¿Buscas algún comercio en particular?
            </h2>

            <div className="w-full max-w-4xl">
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <li className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 ease-in-out">
                        <Link href={`${urlDir}/name`}>
                            <div className="p-6 cursor-pointer flex flex-col items-center justify-center">
                                <Image src="/browse-icons/name.png" alt="Name icon" width={180} height={200} />
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">Búsqueda por nombre</h3>
                            </div>
                        </Link>
                    </li>

                    <li className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 ease-in-out">
                        <Link href={`${urlDir}/city`}>
                            <div className="p-6 cursor-pointer flex flex-col items-center justify-center">
                                <Image src="/browse-icons/city.png" alt="City icon" width={180} height={200} />
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">Búsqueda por ciudad</h3>
                            </div>
                        </Link>
                    </li>

                    <li className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 ease-in-out">
                        <Link href={`${urlDir}/activity`}>
                            <div className="p-6 cursor-pointer flex flex-col items-center justify-center">
                                <Image src="/browse-icons/activity.png" alt="Activity icon" width={180} height={200} />
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">Búsqueda por actividad</h3>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

        </>
    );
}

export default BrowseIndex;
