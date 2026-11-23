function WhyChooseCard({ item }) {
  return (
    <div className=" mt-16 p-8.25 border border-gray-200 rounded-2xl max-w-[384px]">
      <img className="mb-4" src={item.img} alt="" />

      <h3 className="mb-2.25 font-semibold text-2xl">{item.title}</h3>
      <p className="text-gray-400">{item.text}</p>
    </div>
  );
}

export default WhyChooseCard;
