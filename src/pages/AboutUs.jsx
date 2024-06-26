const AboutUs = () => {
  return (
    <div className="relative min-h-screen font-script text-xl ">
      <img
        src="/img/aboutus/about.jpeg"
        alt="img"
        className="w-full h-auto"
      />
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-5xl text-white font-script italic">
          About Us
        </h2>
      </div>

      <div className="flex flex-1 items-center justify-center bg-gradient-to-r from-gray-800 to-gray-500 p-4">
        <div className="max-w-screen-md mx-auto">
          <img
            src="/img/aboutus/aboutUs.jpg"
            alt="img"
            className="w-full h-auto md:max-w-full"
          />
          <p className="mt-4 text-white leading-relaxed">
            “Sexy and iconic,
            <span className="text-red-300"> Denim by Jeans Couture </span>
            is a brand with Spanish temperament.
            Born in 1962, at the heart of the
            dance floor our jeans know how to
            move.” Established in Spain in 1962,
            we were the first European fashion
            jeans brand to conquer the world. We
            flourished in the 70’s and 80’s when
            our iconic fits and flares were worn
            by influential fashion icons and
            musicians. Before we knew it, we were
            all over the dance floor. Between
            other great jeans brands of that time
            <span className="text-red-300"> Denim by Jeans Couture </span>
            brought something new, a sexy and
            fashionable pair of jeans.
          </p>

          <p className="mt-4 text-white leading-relaxed">
            Finding the perfect balance between
            comfort and style revolutionised the
            women’s jeans forever.
            <span className="text-red-300"> Denim by Jeans Couture </span>
            was colourful, corduroy and full of
            ‘flare’. Soon young people all over
            the world recognised Denim by Jeans
            Couture as their perfect fit.{' '}
            <span className="text-red-300"> Denim by Jeans Couture </span>
            was a first and favourite of the
            movers and shakers of the 70’s onwards
            and we are sure we will be your
            favourite too. Apart from the poetry
            of the past, we also look forward,
            because finding and improving the
            sexiest most effortless fits will
            never tire us.{' '}
            <span className="text-red-300"> Denim by Jeans Couture </span>
            is designed in the denim capital of
            the world ‘Amsterdam’ but just like
            the beginning, it’s made by the oldest
            tailor family in Spain. There is love
            in these jeans, share the love with{' '}
            <span className="text-red-300"> Denim by Jeans Couture </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
