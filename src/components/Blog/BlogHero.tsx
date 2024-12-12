export default function BlogHero() {
  return (
    <div className="relative h-[400px] bg-[#F9F1E7]">
      <div className="absolute inset-0">
        <img 
          src="/18.jpg" 
          alt="Blog" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
        <div className="flex items-center gap-2 text-gray-600">
          <span>Home</span>
          <span>/</span>
          <span className="text-gray-900">Blog</span>
        </div>
      </div>
    </div>
  );
} 