import Image from "next/image";
import UnderConstruction from "@/components/UnderConstruction";

export default function AboutPage() {
  return (
    <UnderConstruction pageName="About Us" />
    // <main>
    //   <section className="relative h-64 flex items-center justify-center text-center text-white">
    //     <Image
    //       src="/images/placeholder.webp"
    //       alt="About Us"
    //       fill
    //       className="absolute inset-0 w-full h-full object-cover"
    //     />
    //     <div className="absolute inset-0 bg-black/60" />
    //     <h1 className="relative z-10 text-4xl font-bold text-jh-gold">
    //       About Us
    //     </h1>
    //   </section>

    //   <section className="max-w-4xl mx-auto p-8 space-y-4">
    //     <p>
    //       At <span className="font-semibold text-jh-rust">Jackson Hole Bat Removal</span>, we specialize in safe and humane wildlife control.  
    //       Our certified team has years of experience in bat removal, exclusion, and attic restoration.
    //     </p>
    //     <p>
    //       We’re committed to protecting homes while also respecting the vital role bats play in the local ecosystem.
    //     </p>
    //   </section>
    // </main>
  )
}
