import React from "react";

const SectionInfo = ({titleItem, ContenidoItem, Image, Icon,  descriptionContenido}) => {



  return (
    <div className="border-b flex w-full gap-2 px-4 cardHover py-4 content-center ">
      <div className="basis-1/4 text-slate-300 font-normal flex content-center flex-wrap font-bold">
        {titleItem} {/* titulo del item */}
      </div>
      <div className="basis-3/5 flex content-center  flex-col">
        <div className="italic font-light">{descriptionContenido}</div> {/* subtitulo de informacion del item */}
        <div className="text-xl">{ContenidoItem} </div> {/* informacion del item */}
      </div>
      <div className="basis-1/6 flex content-end flex content-center flex-wrap">
        <div className="w-14">
          {Image && <img src={Image} />}
          {Icon && <img src={Icon} />}
        </div>
        <div></div> {/* subtitulo de informacion del item */}
        <div></div> {/* subtitulo de informacion del item */}
      </div>
    </div>
  );
};

export default SectionInfo;
