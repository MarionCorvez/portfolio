import Introduction from "@/app/ui/Introduction";
import Work from "@/app/ui/Work";
import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";
import Experience from "@/app/ui/Experience";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Work />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
