import Link from "next/link";
import Image from 'next/image';

function MiniStoreWindow({ store, userType }) {

  let urlShop = '';

  switch (userType) {
    case 'user':
      urlShop = `/usertypes/user/store/${store.id}`;
      break;
    case 'store':
      urlShop = `/usertypes/store/${store.id}`;
      break;
    case 'admin':
      urlShop = `/usertypes/admin/store/${store.id}`;
      break;
    default:
      urlShop = `/store/${store.id}`;
      break;
  }



  return (
    <div className="flex flex-col overflow-hidden border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">

      <div className="flex-shrink-0">
        {
          store.photos && store.photos.photo1
            ? <Image
              src={"/photos/" + store.photos.photo1}
              alt="Imagen"
              width={600}
              height={400}
              layout="responsive"
              objectFit="contain"
            />
            : <Image
              src="/photos/not-found.png"
              alt="Imagen"
              width={600}
              height={400}
              layout="responsive"
              objectFit="contain"
            />
        }
      </div>

      <div className="flex flex-col justify-between flex-1 p-4">
        <div>
          <p className="text-sm text-gray-500">{store.city}</p>
          <h3 className="text-lg font-semibold">{store.businessName}</h3>
          <p className="text-sm text-gray-700">{store.activity}</p>
        </div>

        <div className="mt-2">
          <p className="text-sm text-gray-600">Título: {store.title}</p>
          <p className="text-sm text-gray-600">Resumen: {store.summary}</p>
        </div>

        {/* Aquí podrías mostrar el número de reseñas si estuviera disponible */}
        <div className="mt-2">
          <p className="text-sm text-gray-600">Número de reseñas: {store.num_reviews}</p>
          <p className="text-sm text-gray-600">Nota: {store.scoring}</p>
        </div>


        <Link href={urlShop} className="mt-4 text-blue-600 hover:text-blue-800 text-sm">
          Más información →
        </Link>
      </div>

    </div>
  );
}

export default MiniStoreWindow;
