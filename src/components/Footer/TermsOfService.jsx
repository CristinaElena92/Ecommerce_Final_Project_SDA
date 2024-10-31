import { useEffect } from "react";

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Deruleaza
      }, []);
  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-r from-gray-800 to-gray-500 p-4 font-script italic text-white text-2xl">
    <div className="max-w-screen-md mx-auto">
      <h1 className="text-5xl font-semibold mb-4 text-red-700 text-center">Terms of Service</h1>
      
      <p className="mb-4">
        Welcome to our Terms of Service page. These terms outline the rules and regulations for
        the use of our application.
      </p>

      <h2 className="text-3xl font-semibold mb-2 text-red-700">Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using our application, you agree to be bound by these Terms of Service and
        all applicable laws and regulations. If you do not agree with any of these terms, you are
        prohibited from using or accessing this application.
      </p>

      <h2 className="text-3xl font-semibold mb-2 text-red-700">Use License</h2>
      <p className="mb-4">
        Permission is granted to temporarily download one copy of the materials (information or
        software) on our application for personal, non-commercial transitory viewing only. This is
        the grant of a license, not a transfer of title, and under this license you may not:
        modify or copy the materials; use the materials for any commercial purpose, or for any
        public display (commercial or non-commercial); attempt to decompile or reverse engineer
        any software contained on our application.
      </p>

      <h2 className="text-3xl font-semibold mb-2 text-red-700">Disclaimer</h2>
      <p className="mb-4">
        The materials on our application are provided on an as is basis. We make no warranties,
        expressed or implied, and hereby disclaim and negate all other warranties including,
        without limitation, implied warranties or conditions of merchantability, fitness for a
        particular purpose, or non-infringement of intellectual property or other violation of
        rights.
      </p>

      <h2 className="text-3xl font-semibold mb-2 text-red-700">Limitations</h2>
      <p className="mb-4">
        In no event shall we or our suppliers be liable for any damages (including, without
        limitation, damages for loss of data or profit, or due to business interruption) arising
        out of the use or inability to use the materials on our application, even if we or our
        authorized representative have been notified orally or in writing of the possibility of
        such damage.
      </p>

      <h2 className="text-3xl font-semibold mb-2 text-red-700">Modifications</h2>
      <p className="mb-4">
        We may revise these terms of service for our application at any time without notice. By
        using this application you are agreeing to be bound by the then current version of these
        Terms of Service.
      </p>

      <h2 className="text-3xl font-semibold mb-2 text-red-700">Governing Law</h2>
      <p className="mb-4">
        These terms and conditions are governed by and construed in accordance with the laws of
        your country/state and you irrevocably submit to the exclusive jurisdiction of the courts
        in that location.
      </p>

      <h2 className="text-3xl font-semibold mb-2 text-red-700">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at{' '}
        <span className="text-red-300">
        <a href="mailto:contact@example.com">JeansCouture@gmail.com</a>.</span>
      </p>
    </div>
    </div>
  );
};

export default TermsOfService;
