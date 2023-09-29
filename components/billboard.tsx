import { Billboard as BillboardType } from "@/types";

interface Props {
  data: BillboardType;
}

const Billboard = ({ data }: Props) => {
  return (
    // <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
    //   <div
    //     style={{ backgroundImage: `url(${data?.imageUrl})`, opacity: "0.3" }}
    //     className='rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover'
    //   >
    //     <div className='h-full w-full flex flex-col justify-center items-center text-center gap-y-8'>
    //       <div className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs'>
    //         {data.label}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
      <div className='relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover'>
        <div
          style={{
            backgroundImage: `url(${data?.imageUrl})`,
            opacity: 0.5,
          }}
          className='absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover rounded-xl'
        ></div>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-xl'></div>
        <div className='h-full w-full flex flex-col justify-center items-center text-center gap-y-8 relative'>
          <div className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs'>
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
