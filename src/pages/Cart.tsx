import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { products } from '../data/products';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart();
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false); // Track order success
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
    deliveryOption: 'pickup', // Default option
  });
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const cartItems = items.map(item => ({
    ...item,
    product: products.find(p => p.id === item.productId)!
  }));

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const sendToTelegram = async () => {
    const botToken = '7553752491:AAGpc2EmmoMZk6r5hXS_4TEHwNCTN6iVEm4';
    const chatId = '330901753';

    const itemDetails = cartItems
      .map(item => `- **${item.quantity}x** ${item.product.name}`)
      .join('\n');

    const message = `
✨ **New Order Alert!** ✨  

📌 **Customer Details:**  
- **Name:** ${userDetails.fullName}  
- **Phone:** ${userDetails.phoneNumber}  
- **Address:** ${userDetails.address || 'N/A'}  
- **Delivery Option:** ${
      userDetails.deliveryOption === 'pickup' ? '🏬 Pickup' : '🚚 Delivery'
    }  

🛍️ **Items Ordered:**  
${itemDetails}

💳 **Total Amount:** **${new Intl.NumberFormat('en-ET', {
      style: 'currency',
      currency: 'ETB',
    }).format(total)}**  
    `;

    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!userDetails.fullName || !userDetails.phoneNumber) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsLoading(true); // Start loading

    // Send order to Telegram
    await sendToTelegram();

    // Clear cart and reset user details
    clearCart();
    setUserDetails({ fullName: '', phoneNumber: '', address: '', deliveryOption: 'pickup' });

    // Show success message
    setOrderSuccess(true);
    setShowOrderForm(false);
    setIsLoading(false); // Stop loading
    window.scrollTo(0, 0); // Scroll to the top to show the success message
  };

  if (orderSuccess) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-green-600">Order Successfully Registered!</h2>
        <p className="mt-4 text-gray-700">
          Thank you for your order. Our team at <strong>Diamond™</strong> will contact you soon.
        </p>
        <Link
          to="/products"
          className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
        <h2 className="mt-4 text-lg font-medium text-gray-900">Your cart is empty</h2>
        <p className="mt-2 text-gray-600">
          Start shopping to add items to your cart
        </p>
        <Link
          to="/products"
          className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className="space-y-4">
            {cartItems.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-4 bg-white p-4 rounded-lg shadow">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-grow">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-gray-600">{product.shortDescription}</p>
                  <div className="mt-2 flex items-center gap-4">
                    <select
                      value={quantity}
                      onChange={(e) => updateQuantity(product.id, Number(e.target.value))}
                      className="rounded border-gray-300"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {new Intl.NumberFormat('en-ET', {
                      style: 'currency',
                      currency: 'ETB'
                    }).format(product.price * quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{new Intl.NumberFormat('en-ET', {
                  style: 'currency',
                  currency: 'ETB'
                }).format(total)}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>{new Intl.NumberFormat('en-ET', {
                    style: 'currency',
                    currency: 'ETB'
                  }).format(total)}</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setShowOrderForm(true)}
              className="w-full mt-6 bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700"
            >
              Proceed to Checkout / ያስመዝግቡ
            </button>
          </div>
        </div>
      </div>


      {/* Order Form */}
      {showOrderForm && (
        <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-medium mb-4">Complete Your Order</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name / ሙሉ ስም</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={userDetails.fullName}
                onChange={(e) => setUserDetails({ ...userDetails, fullName: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number / ስልክ</label>
              <input
                type="tel"
                className="w-full p-2 border rounded"
                value={userDetails.phoneNumber}
                onChange={(e) => setUserDetails({ ...userDetails, phoneNumber: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address (for delivery) / አድራሻ</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={userDetails.address}
                onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Delivery Option</label>
              <select
                value={userDetails.deliveryOption}
                onChange={(e) => setUserDetails({ ...userDetails, deliveryOption: e.target.value })}
                className="w-full p-2 border rounded"
              >
                <option value="pickup">Pickup from store / ከሱቅ እረከባለው</option>
                <option value="delivery">Delivery to address / ለአድራሻ መላክ</option>
              </select>
            </div>
            <button
              type="submit"
              className={`w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? 'Processing Order...' : 'Submit Order'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
