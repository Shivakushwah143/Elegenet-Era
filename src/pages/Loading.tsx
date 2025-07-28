export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] gap-4">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-blue-800  border-t-transparent rounded-full animate-spin"></div>
      
      {/* Loading text */}
      <p className="text-lg font-medium text-gray-600"> your posts  are Loading posts...</p>
    </div>
  );
}

