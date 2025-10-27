import React from 'react';

interface Category {
  id: number;
  name: string;
  description: string;
  gradient: string;
  icon: string;
}

const Dashboard: React.FC = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: 'Hôtels',
      description: 'Trouvez les meilleurs hôtels pour votre séjour',
      gradient: 'from-blue-400 to-blue-600',
      icon: '🏨'
    },
    {
      id: 2,
      name: 'Chauffeurs',
      description: 'Réservez un chauffeur professionnel',
      gradient: 'from-green-400 to-green-600',
      icon: '🚗'
    },
    {
      id: 3,
      name: 'Locations',
      description: 'Louez des véhicules pour vos déplacements',
      gradient: 'from-purple-400 to-purple-600',
      icon: '🚙'
    },
    {
      id: 4,
      name: 'Restaurants',
      description: 'Découvrez les meilleurs restaurants locaux',
      gradient: 'from-orange-400 to-orange-600',
      icon: '🍽️'
    },
    {
      id: 5,
      name: 'Guides Touristiques',
      description: 'Explorez avec des guides expérimentés',
      gradient: 'from-teal-400 to-teal-600',
      icon: '🗺️'
    },
    {
      id: 6,
      name: 'Activités',
      description: 'Découvrez des activités passionnantes',
      gradient: 'from-pink-400 to-pink-600',
      icon: '🎯'
    },
    {
      id: 7,
      name: 'Shopping',
      description: 'Trouvez les meilleurs magasins et marchés',
      gradient: 'from-yellow-400 to-yellow-600',
      icon: '🛍️'
    },
    {
      id: 8,
      name: 'Services',
      description: 'Accédez à divers services locaux',
      gradient: 'from-indigo-400 to-indigo-600',
      icon: '🔧'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-4xl">🔍</div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">E-searchIn</h1>
                <p className="text-sm text-gray-600">Trouvez ce dont vous avez besoin</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-4">
              <button className="px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors">
                Accueil
              </button>
              <button className="px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors">
                À propos
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Connexion
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explorez nos Catégories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez une variété de services pour faciliter votre visite et rendre votre expérience inoubliable
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un service..."
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:border-indigo-600 shadow-lg"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              Rechercher
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className={`relative h-48 bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                <div className="text-7xl">{category.icon}</div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                  Explorer
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white mt-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">© 2025 E-searchIn. Tous droits réservés.</p>
            <p className="text-sm">Application dédiée pour trouver les besoins dans le pays</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
