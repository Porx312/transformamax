import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, linkafiliados }) => (
  <div className="md max-w-[304px]   p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      }  justify-center flex flex-col items-center bg-transparent  overflow-hidden rounded-md border-2 hover:border-opacity-60 hover:border-gray-200 hover:dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title} `}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={200}
              height={200}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={200}
            height={200}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-base font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
      
        {
          linkafiliados && (
            <Link
              href={linkafiliados}
              className="text-base  font-medium p-1  leading-6 text-black hover:bg-orange-500  bg-orange-400 flex justify-center  gap-1 rounded-md"
              aria-label={`Link to ${title}`}
            >
            <Image   src={"/static/images/amazon.png"} alt="Comprar en Amazon" width={20} height={20} />
            comprar en amazon
            </Link>
          )}
          <div className='flex justify-between pt-1'>
            <h2 className='text-base text-slate-700 font-medium'>202$</h2>
            <div className="flex items-center text-gray-600">
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 fill-current text-yellow-500"
      >
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        ></path>
      </svg>
      <span className="ml-2 text-sm ">4.8 (24 reviews)</span>
    </div>
          </div>
          
    {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-gray-400 hover:text-gray-500 dark:hover:text-gray-700"
            aria-label={`Link to ${title}`}
          >
            leer mas &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
