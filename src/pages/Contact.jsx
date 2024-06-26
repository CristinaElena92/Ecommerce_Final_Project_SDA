
const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-wrap items-start bg-gradient-to-r from-gray-800 to-gray-500 text-white">
      {/* Lista SVG-urilor */}
      <ul className="divide-y divide-gray-200 pr-8 w-full md:w-1/2 lg:w-1/4">
        <li className="flex items-center py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <b className="font-bold text-sm md:text-base lg:text-sm">Piazza Tre Torri, 20145 Milano MI, Italia</b>
        </li>
        <li className="flex items-center py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <b className="font-bold text-sm md:text-base lg:text-sm">+39 02 4952 9367</b>
        </li>
      </ul>
      {/* Formularul */}
      <div className="w-full md:w-1/2 lg:w-2/3 mt-8 md:mt-0 md:ml-auto">
        <form className="max-w-md mx-auto">
          <h3 className="text-lg font-semibold mb-4">Your Message:</h3>
          <div className="mb-4">
            <input
              type="email"
              placeholder="E-mail"
              required
              className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:border-red-500 text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              id="message"
              placeholder="Your message"
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 text-black bg-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Harta Google */}
      <div className="w-full mt-8 lg:w-1/2 lg:mt-0">
        <iframe
          className="w-full h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89546.79780941273!2d9.095330976724453!3d45.46300619208215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c16b1b6b96cd%3A0x6f7101088515f474!2sCityLife%20Shopping%20District!5e0!3m2!1sro!2sro!4v1718125270298!5m2!1sro!2sro"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
