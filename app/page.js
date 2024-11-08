import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

export default function Home() {
  return (
    <>
    <main className="bg-purple-200">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-3xl font-bold">
            The best URL shortner in the world
          </p>
          <p className="px-56 text-center">
            We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
          </p>
          <div className='flex gap-3 justify-start'>
            <Link href="/shorten"><button className='bg-purple-500 text-white rounded-lg shadow-lg p-3 py-2 font-bold'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 text-white rounded-lg shadow-lg p-3 py-2 font-bold'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" fill={true} alt="an Image of a vector" src={"/vector.jpg"}  />
        </div>
      </section>
    </main>
    </>
  );
}
