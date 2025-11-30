import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  benefits: string[];
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Ensalada Verde Orgánica',
    description: 'Mezcla fresca de vegetales verdes premium',
    price: 12.99,
    image: '🥗',
    benefits: ['Alto en fibra', 'Bajo en calorías', 'Rich en antioxidantes'],
    category: 'Vegetales'
  },
  {
    id: 2,
    name: 'Proteína en Polvo Natural',
    description: 'Proteína de suero de leche sin aditivos',
    price: 34.99,
    image: '💪',
    benefits: ['100% natural', 'Sin azúcar', 'Fácil digestión'],
    category: 'Suplementos'
  },
  {
    id: 3,
    name: 'Frutas Secas Variadas',
    description: 'Mix de almendras, nueces y pasas',
    price: 18.99,
    image: '🌰',
    benefits: ['Energía natural', 'Omega-3', 'Snack saludable'],
    category: 'Snacks'
  },
  {
    id: 4,
    name: 'Té Verde Antioxidante',
    description: 'Té verde premium de Japón',
    price: 9.99,
    image: '🍵',
    benefits: ['Antioxidantes', 'Acelera metabolismo', 'Sin cafeína excesiva'],
    category: 'Bebidas'
  },
  {
    id: 5,
    name: 'Yogur Griego Sin Azúcar',
    description: 'Yogur natural rico en probióticos',
    price: 7.99,
    image: '🥛',
    benefits: ['Probióticos', 'Alto en proteína', 'Digestión saludable'],
    category: 'Lácteos'
  },
  {
    id: 6,
    name: 'Granola Casera',
    description: 'Mezcla de avena, miel y frutos secos',
    price: 13.99,
    image: '🍎',
    benefits: ['Fibra completa', 'Energía duradera', 'Desayuno perfecto'],
    category: 'Cereales'
  },
];

interface CartItem extends Product {
  quantity: number;
}

export const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [showCart, setShowCart] = useState(false);

  const categories = ['Todos', ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-purple-600 to-pink-600 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🥗</span>
            <h1 className="text-2xl font-bold">Salud en Cada Bocado</h1>
          </div>
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative bg-white text-purple-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition"
          >
            🛒 Carrito
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-12 mb-12 text-center animate-fadeIn">
          <div className="bg-black bg-opacity-10 rounded-2xl p-4 w-40 h-40 mx-auto mb-6 flex items-center justify-center">
            <img src="/SaludEnCadaBocado/Logo.png" alt="Salud en Cada Bocado Logo" className="w-32 h-32" />
          </div>
          <h2 className="text-4xl font-bold mb-4">¡Transforma tu Alimentación Hoy!</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Descubre cómo cambiar tus hábitos alimenticios puede mejorar tu salud, energía y bienestar general.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Comienza tu Viaje Saludable
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Problema Section */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-red-800 mb-4">⚠️ Problema: Mala Alimentación</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded">
                  <p className="text-red-700 font-semibold mb-2">🍔 Comida Rápida</p>
                  <p className="text-sm text-gray-600">Alta en grasas saturadas y sodio, baja en nutrientes</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-red-700 font-semibold mb-2">🍬 Azúcares Refinados</p>
                  <p className="text-sm text-gray-600">Generan picos de insulina y adicción</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-red-700 font-semibold mb-2">🥤 Bebidas Azucaradas</p>
                  <p className="text-sm text-gray-600">Contribuyen a obesidad y diabetes tipo 2</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-red-700 font-semibold mb-2">🍕 Alimentos Ultraprocesados</p>
                  <p className="text-sm text-gray-600">Llenos de aditivos y conservantes dañinos</p>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Por qué cambiar tu alimentación?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <span className="text-4xl">⚡</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Mayor Energía</h4>
                    <p className="text-gray-600">Reduce el cansancio crónico con nutrición adecuada.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-4xl">❤️</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Corazón Saludable</h4>
                    <p className="text-gray-600">Disminuye riesgo de enfermedades cardiovasculares.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-4xl">🧠</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Mejor Concentración</h4>
                    <p className="text-gray-600">Mejora tu enfoque mental y productividad diaria.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-4xl">😴</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Mejor Sueño</h4>
                    <p className="text-gray-600">Duerme profundamente con una dieta balanceada.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Nuestros Productos Saludables</h3>

              {/* Category Filter */}
              <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 text-center">
                      <span className="text-6xl">{product.image}</span>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h4>
                      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                      <div className="flex gap-2 flex-wrap mb-4">
                        {product.benefits.map((benefit, idx) => (
                          <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            ✓ {benefit}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-purple-600">S/. {product.price}</span>
                        <button
                          onClick={() => addToCart(product)}
                          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                        >
                          Agregar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar/Cart */}
          <div className="lg:col-span-1">
            {/* Tips Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 sticky top-24">
              <h4 className="text-lg font-bold text-gray-800 mb-4">💡 Consejos Saludables</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Bebe al menos 2L de agua diaria</li>
                <li>• Come 5 porciones de frutas/verduras</li>
                <li>• Duerme 7-8 horas cada noche</li>
                <li>• Evita alimentos ultraprocesados</li>
                <li>• Realiza ejercicio 30min diarios</li>
                <li>• Come despacio y mastica bien</li>
              </ul>
            </div>

            {/* Cart Details */}
            {showCart && (
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Tu Carrito</h4>
                {cart.length === 0 ? (
                  <p className="text-gray-600 text-center py-8">Carrito vacío</p>
                ) : (
                  <>
                    <div className="space-y-4 max-h-96 overflow-y-auto mb-4">
                      {cart.map(item => (
                        <div key={item.id} className="flex justify-between items-start gap-2 p-3 bg-gray-50 rounded">
                          <div className="flex-1">
                            <p className="font-semibold text-sm text-gray-800">{item.name}</p>
                            <p className="text-xs text-gray-600">${item.price} x {item.quantity}</p>
                          </div>
                          <div className="flex gap-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="bg-red-500 text-white w-6 h-6 rounded hover:bg-red-600"
                            >
                              -
                            </button>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="bg-green-500 text-white w-6 h-6 rounded hover:bg-green-600"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between mb-4">
                          <span className="font-bold text-gray-800">Total:</span>
                          <span className="text-2xl font-bold text-purple-600">S/. {totalPrice.toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold hover:opacity-90 transition">
                          Proceder al Pago
                        </button>
                      </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Nutrición Info Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">📊 Guía de Nutrición Saludable</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-5xl mb-4">🥗</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Vegetales y Frutas</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ 5 porciones diarias recomendadas</li>
                <li>✓ Ricas en vitaminas y minerales</li>
                <li>✓ Bajas en calorías</li>
                <li>✓ Fibra natural para digestión</li>
                <li>✓ Previenen enfermedades crónicas</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Proteínas Saludables</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Construyen y reparan músculos</li>
                <li>✓ Pescado, pollo, huevos, legumbres</li>
                <li>✓ 25-30g por comida</li>
                <li>✓ Aumentan saciedad</li>
                <li>✓ Aceleran metabolismo</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-5xl mb-4">🌾</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Granos Integrales</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Arroz integral, avena, trigo</li>
                <li>✓ Controlan niveles de azúcar</li>
                <li>✓ Energía duradera</li>
                <li>✓ Mejor digestión</li>
                <li>✓ Mayor sensación de saciedad</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonios Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">💬 Historias de Éxito</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">👩‍💼</span>
                <div>
                  <p className="font-bold text-gray-800">María</p>
                  <p className="text-sm text-gray-600">Perdió 15 kg en 3 meses</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">"Cambié mi alimentación y mi energía aumentó notablemente. ¡No vuelvo atrás!"</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">👨‍💻</span>
                <div>
                  <p className="font-bold text-gray-800">Carlos</p>
                  <p className="text-sm text-gray-600">Redujo estrés y mejoró dormir</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">"Mejor concentración en el trabajo y duermo profundamente. Recomiendo a todos."</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">👩‍🏫</span>
                <div>
                  <p className="font-bold text-gray-800">Laura</p>
                  <p className="text-sm text-gray-600">Controlou su diabetes</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">"Mis niveles de glucosa están normales. ¡La alimentación lo cambió todo!"</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">❓ Preguntas Frecuentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow">
              <p className="font-bold text-gray-800 mb-2">¿Cuánto tiempo tarda ver resultados?</p>
              <p className="text-gray-600 text-sm">Generalmente, en 2-4 semanas notarás más energía. Los cambios físicos suelen verse en 4-8 semanas.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <p className="font-bold text-gray-800 mb-2">¿Es caro comer saludable?</p>
              <p className="text-gray-600 text-sm">No. Comprar productos locales y de temporada es más económico que comida procesada.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <p className="font-bold text-gray-800 mb-2">¿Puedo comer mis comidas favoritas?</p>
              <p className="text-gray-600 text-sm">Sí, con moderación. El equilibrio es clave. No se trata de privarse, sino de elegir mejor.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <p className="font-bold text-gray-800 mb-2">¿Necesito ejercitarme también?</p>
              <p className="text-gray-600 text-sm">La dieta es el 80%. 30 minutos de ejercicio diario potencia los resultados.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2">© 2025 Salud en Cada Bocado. Todos los derechos reservados.</p>
          <p className="text-gray-400">Transformando vidas a través de una alimentación saludable</p>
        </div>
      </footer>
    </div>
  );
};
