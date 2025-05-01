import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5 size-50 bg-red-300 relative">
      <Image
        className="mx-auto object-cover"
        fill={true}
        src="https://i.pinimg.com/736x/4d/7e/54/4d7e546c56bfeff4307e26099d15a566.jpg"
        alt=""
      />
    </div>
  );
}

