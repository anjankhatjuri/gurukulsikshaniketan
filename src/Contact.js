import React from 'react';

function Contact() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h1>
      <div className="bg-white shadow-lg p-6 rounded-lg space-y-4">
        <p className="text-gray-700">📍 Address:Village-Koradih, P.O.-Tulin, P.S.-Jhalda , Dist-Purulia, W.B.</p>
        <p className="text-gray-700">📞 Phone: +91-98********</p>
        <p className="text-gray-700">📧 Email: gurukul****@gmail.com</p>
      </div>

      <div className="mt-6">
 
 <iframe 
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.4969270188994!2d85.88577557465415!3d23.37023377893161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f44bf3ad998ab5%3A0x178c24c646aba90a!2sGurukul%20Shiksha%20Niketan!5e0!3m2!1sen!2sin!4v1755687907704!5m2!1sen!2sin" 
 width="600" 
 height="450" 
 
allowFullScreen=""
    loading="lazy"
    className="rounded-lg shadow-md"></iframe>
  
</div>


      <form className="mt-6 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-2 rounded mb-3"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-2 rounded mb-3"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border border-gray-300 p-2 rounded mb-3"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
