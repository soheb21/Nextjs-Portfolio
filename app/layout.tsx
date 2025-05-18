import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbat";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-gray-900 text-white`}>
        <Navbar />
        <main className='px-5 mt-[120px] sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto flex flex-col w-full max-w-[1090px] gap-14'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
