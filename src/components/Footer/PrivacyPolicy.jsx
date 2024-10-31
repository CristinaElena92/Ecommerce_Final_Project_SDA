import { useEffect } from "react";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Derulează 
      }, []);
  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-r from-gray-800 to-gray-500 p-4 font-script italic text-white text-2xl">
    <div className="max-w-screen-md mx-auto ">
    <h1 className="text-5xl font-semibold mb-4 text-red-700 text-center">Privacy Policy</h1>

      
      <p className="mb-4 ">
        Welcome to our Privacy Policy page. This policy outlines the types of personal information
        that is received and collected by our application and how it is used.
      </p>

      <h2 className="text-3xl font-semibold mb-2 text-red-700">Information We Collect</h2>
      <p className="mb-4">
        We may collect and store personal information that you voluntarily provide to us, including
        but not limited to your name, email address, and any other information you provide when
        interacting with our services.
      </p>

      <h2 className="text-3xl font-semibold mb-2 text-red-700">How We Use Your Information</h2>
      <p className="mb-4">
        The information we collect is used to improve the quality of our service, personalize your
        experience, and respond to your inquiries or requests.
      </p>

      <h2 className="text-3xl font-semibold mb-2 text-red-700">Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell, trade, or otherwise transfer to outside parties your personally identifiable
        information. This does not include trusted third parties who assist us in operating our
        application, conducting our business, or servicing you, as long as those parties agree to
        keep this information confidential.
      </p>

      <h2 className="text-3xl font-semibold mb-2 text-red-700">Security of Your Information</h2>
      <p className="mb-4">
        We implement a variety of security measures to maintain the safety of your personal
        information when you enter, submit, or access your personal information.
      </p>

      <h2 className="text-3xl font-semibold mb-2 text-red-700">Updates to This Policy</h2>
      <p className="mb-4">
        We reserve the right to update or change our Privacy Policy at any time. You should
        periodically check this page for any changes. Your continued use of our application after
        any changes to this Privacy Policy will constitute your acceptance of such changes.
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

export default PrivacyPolicy;
