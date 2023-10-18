import Tag from "@/components/Tag";
import { Rocket } from "@/components/logo";

const Hero = ({dark}: any) => {
  return (
    <section className={`min-h-[90vh] ${dark ? "bg-black text-white" : "bg-white"} bg-[url(/bgImage.png)] bg-cover flex flex-col justify-center sm:items-center pl-10`}>
        <div className="max-sm:min-h-[75vh] max-sm:flex max-sm:flex-col max-sm:gap-[2rem] max-sm:justify-center">

          <h1 className="sm:text-[14rem] font-semibold sm:leading-[14rem] text-[84px] leading-[84px] font-montserrat">Hello, <br/>World.</h1>

          <p className="text-[#3A4862] sm:hidden font-semibold pt-10 text-[23px]">Dive into the emerging <br/>fields of <span className="text-black">tomorrow</span>.</p>

          <div className="flex gap-[5rem] pt-6 max-sm:flex-col max-sm:gap-1 sm:pl-3">
            <Tag icon="/roc.svg" name="STARTUPS"/>
            <Tag icon="/design.svg" name="DESIGN"/>
            <Tag icon="/tech.svg" name="TECHNOLOGY"/>
          </div>

          <p className="text-[#3A4862] text-[2.05rem] pt-6 font-[500] max-sm:hidden sm:pl-3">Dive into the emerging fields of <span className={`text-black ${dark ? "text-white" : "text-black"}`}>tomorrow</span>.</p>
  
        </div>
      </section>
  )
}

export default Hero