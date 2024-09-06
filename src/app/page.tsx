import Image from "next/image";
import GoKu from "../../public/images/goku.jpg";

export default function Page() {
  return (
    <main>
      <div className="w-[700] h-[700] bg-red-300">
        <Image
          src="https://images.pexels.com/photos/28197211/pexels-photo-28197211/free-photo-of-d-ng-phong-c-nh-nui-thien-nhien.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width={500}
          height={500}
          alt="Picture of the author"
          quality={100}
        />
      </div>
    </main>
  );
}
