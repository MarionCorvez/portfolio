import Header from "@/app/ui/Header";
import Introduction from "@/app/ui/Introduction";
import Work from "@/app/ui/Work";
import Skills from "@/app/ui/Skills";
import Experience from "@/app/ui/Experience";
import Footer from "@/app/ui/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Work />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
