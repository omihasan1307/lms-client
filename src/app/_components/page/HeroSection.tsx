import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute top-1/4 right-0 w-48 h-48 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>
      
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Learn Anytime, Anywhere — <span className="text-blue-600">Build Your Future</span> with Confidence
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Our LMS brings top-quality education to your fingertips. Access live
            classes, recorded lectures, and expert support whenever you need it.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button className="px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-6 text-lg border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              Explore Courses
            </Button>
          </div>
          
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((item) => (
                <img 
                  key={item}
                  src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}.jpg`}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="text-sm text-gray-600">
              <p>Join <span className="font-semibold text-blue-600">10,000+</span> happy learners</p>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.9/5 (2,500+ reviews)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <img
              src="/heroImg.png"
              alt="Online learning illustration"
              className="w-full max-w-lg rounded-xl shadow-2xl border-8 border-white transform hover:scale-[1.02] transition-transform duration-300"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">Live Classes</p>
                  <p className="text-xs text-gray-500">Join now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;