const testimonials = [
  {
    name: "Pranathi Ramavath",
    contactEmail: "cs21b1043@iiitr.ac.in",
  },
  {
    name: "K Satya Dilsched.",
    contactEmail: "cs21b1009@iiitr.ac.in",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Contact Us
      </h2>
      <div className="flex justify-center">
        <div>
          <ul className="text-white text-lg">
            {testimonials.map((item) => (
              <li key={item.contactEmail} className="mb-4">
                {item.name} - <a href={`mailto:${item.contactEmail}`} className="text-blue-400 hover:underline">{item.contactEmail}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
