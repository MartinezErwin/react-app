import Sectionfollow from "./Sectionfollow";

export default function Card() {
  return (
    <>
      <div className="bg-gray-950 w-96 h-80 p-4 rounded-xl text-white ">
        <strong className="text-2xl">A quién seguir</strong>
        <Sectionfollow userName="midudev" name="Miguel Angel" />
        <Sectionfollow userName="DayanErwin" name="Dayan Plaza" />
      </div>
    </>
  );
}
