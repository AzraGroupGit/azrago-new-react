interface Testimonial {
  name: string;
  avatar: string;
  rating: number;
  review: string;
  date: string;
  destination: string;
  location: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        } fill-current`}
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ));
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
          />

          {/* Name & Location */}
          <div>
            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
        </div>

        {/* Quote Icon */}
        <div className="text-blue-500 opacity-20">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {renderStars(testimonial.rating)}
      </div>

      {/* Review Text */}
      <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
        "{testimonial.review}"
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-500">{testimonial.date}</span>
        <span className="text-sm font-semibold text-blue-600">
          {testimonial.destination}
        </span>
      </div>
    </div>
  );
}

export default TestimonialCard;
