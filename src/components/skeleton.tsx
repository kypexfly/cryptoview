export const SkeletonPriceCard = ({ size }: { size: number }) => (
  <div className='grid grid-cols-[repeat(auto-fill,_minmax(180px,1fr))] gap-3'>
    {Array(size)
      .fill(0)
      .map((_, index) => (
        <div
          key={index}
          className='h-[68px] animate-pulse border-2 border-transparent bg-[#27272b] p-2'
        ></div>
      ))}
  </div>
)
