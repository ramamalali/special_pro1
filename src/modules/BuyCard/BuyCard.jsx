import Input from "../../components/Input/Input";

const BuyCard = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold text-white text-center mt-3 mb-5">
        Buy Card
      </h2>
      <form className="flex justify-center items-center flex-col gap-y-8">
        <Input placeholder={"Full Name"} type={"text"} />
        <Input placeholder={"Email Address"} type={"email"} />
        <Input placeholder={"Phone Number"} type={"text"} />
        <Input placeholder={"Transaction Screenshot"} type={"file"} />
        <select
          name=""
          id=""
          className="rounded-lg font-medium w-4/5 py-4 px-6 outline-none"
        >
          <option value=""></option>
          <option value="ebay">Ebay</option>
        </select>
        <Input placeholder={"Transaction Number"} type={"text"} />
      </form>
    </div>
  );
};

export default BuyCard;
