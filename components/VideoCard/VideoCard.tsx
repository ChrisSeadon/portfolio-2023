interface VideoCardProps {
  title: string;
  videoUrl: string;
  bulletPoints: string[];
}

export function VideoCard({ title, videoUrl, bulletPoints }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="aspect-video bg-black">
        <video
          className="w-full h-full object-contain"
          controls
          preload="metadata"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl mb-4">{title}</h3>
        <ul className="space-y-2">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span className="text-gray-700 flex-1">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
