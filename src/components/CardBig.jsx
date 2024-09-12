import React from 'react'


const CardBig = ({titleItem, descriptionItem, Image, icon }) => {





  return (
    <div className='cardBig py-4 flex flex-col gap-8'>
        <div className='px-4'>
            <div>
                title
            </div>
            <div>
                subtitle
            </div>
        </div>

        <div className=''>
            <div className='border-b flex w-full gap-2 px-4 cardHover py-4 content-center '>
                <div className='basis-1/4 text-slate-300 font-normal flex content-center flex-wrap'>
                    {titleItem}  {/* titulo del item */}
                 </div>
                <div className='basis-3/5 flex content-center flex-wrap'>
                    <div>{descriptionItem} </div> {/* informacion del item */}
                    <div></div> {/* subtitulo de informacion del item */}
                </div>
                <div className='basis-1/6 flex content-end flex content-center flex-wrap'>
                    <div className='w-14'>
                        {Image  && <img src={Image} />}
                        {icon  && <img src={Image} />}
                    </div>
                    <div></div> {/* subtitulo de informacion del item */}
                    <div></div> {/* subtitulo de informacion del item */}
                </div>
            </div>
           


        </div>
    </div>
  )
}

export default CardBig