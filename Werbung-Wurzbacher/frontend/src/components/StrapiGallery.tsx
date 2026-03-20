import { useEffect, useState } from 'react';

const StrapiGallery = ({ category }: { category: string }) => {
  const [items, setItems] = useState([]);
  const STRAPI_URL = 'http://localhost:1337';

  useEffect(() => {
    // Holt alle Referenzen mit Bild-Daten
    fetch(`${STRAPI_URL}/api/referenzes?populate=*`)
      .then(res => res.json())
      .then(response => {
        // Filtern: Nur Bilder der aktuellen Kategorie anzeigen
        const filtered = response.data.filter((item: any) => item.Kategorie === category);
        setItems(filtered);
      })
      .catch(err => console.error("Fehler beim Laden:", err));
  }, [category]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item: any) => (
        <div key={item.id} className="overflow-hidden rounded-lg shadow-lg bg-white p-2">
          <img 
            src={`${STRAPI_URL}${item.Bild.url}`} 
            alt={item.Titel}
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
          <p className="mt-2 text-center font-semibold text-gray-700">{item.Titel}</p>
        </div>
      ))}
    </div>
  );
};

export default StrapiGallery;