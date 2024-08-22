import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex items-center justify-center p-4">
      <div className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-orange-400 mb-12 text-center">CONTACT ME</h2>
        <div className="max-w-lg mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
          <form
            action="#"
            method="POST"
            className="space-y-8"
          >
            <div className="flex flex-col space-y-6">
              <label className="text-gray-300">
                <span className="block text-lg font-semibold mb-2">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </label>
              <label className="text-gray-300">
                <span className="block text-lg font-semibold mb-2">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </label>
              <label className="text-gray-300">
                <span className="block text-lg font-semibold mb-2">Subject</span>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </label>
              <label className="text-gray-300">
                <span className="block text-lg font-semibold mb-2">Message</span>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 text-black px-6 py-3 rounded-lg font-semibold text-lg transition-transform duration-300 transform hover:scale-105 hover:bg-orange-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
