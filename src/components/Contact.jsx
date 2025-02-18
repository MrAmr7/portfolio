
import { useState } from 'react';
import { FaWhatsapp, FaMailBulk, FaTelegram } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these values with your actual EmailJS details
    const serviceID = 'service_7tgwa69'; // Your EmailJS service ID
    const templateID = 'template_b2lro2k'; // Your EmailJS template ID
    const userID = 'HyM-UWQMaeYH743N9'; // Your EmailJS public key

    // Send email using EmailJS
    emailjs
      .sendForm(serviceID, templateID, e.target, userID)
      .then(
        (result) => {
          console.log('Message sent:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('Error sending message:', error.text);
          alert('An error occurred while sending the message.');
        }
      );
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center z-50">
      <div className="max-w-lg mx-auto bg-white w-[100%] p-8 rounded-xl shadow-xl shadow-blue-900 mt-10 " id="Contact">
        <h1 className="text-2xl text-purple-950 font-semibold text-center mb-6">Contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name" // Ensure this matches the placeholder in your EmailJS template
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email" // Ensure this matches the placeholder in your EmailJS template
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message" // Ensure this matches the placeholder in your EmailJS template
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>

        <div className="mt-6 flex justify-center space-x-4">
          <a href="https://gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
            <FaMailBulk size={26} />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
            <FaWhatsapp size={26} />
          </a>
          <a href="https://telegram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
            <FaTelegram size={26} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
