import { MutableRefObject } from "react"

interface props {
  reference:MutableRefObject<null>
}
const WorkWithUs:React.FC<props> =({reference})=>{
  
    const links = [
        { name: 'Open roles', href: '#' },
        { name: 'Internship program', href: '#' },
        { name: 'Our values', href: '#' },
        { name: 'Meet our leadership', href: '#' },
      ]
      const stats = [
        { name: 'In the networking and connectivity industry', value: '8 Years of experience' },
        { name: 'Number of successfully completed projects  ', value: '300+' },
        { name: 'Chose to renew their contract or continue using our services', value: '80%' },
        { name: 'Average installation and setup time for networks', value: '1 day' },
      ]
      
    
        return (
          <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32" ref={reference}>
            <img
              src="/withSky.jpg"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-bottom"
            />
            <svg
              viewBox="0 0 1097 845"
              aria-hidden="true"
              className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
            >
              <path
                fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
                fillOpacity=".2"
                d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
              />
              <defs>
                <linearGradient
                  id="10724532-9d81-43d2-bb94-866e98dd6e42"
                  x1="1097.04"
                  x2="-141.165"
                  y1=".22"
                  y2="363.075"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#776FFF" />
                  <stop offset={1} stopColor="#FF4694" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              viewBox="0 0 1097 845"
              aria-hidden="true"
              className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
            >
              <path
                fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
                fillOpacity=".2"
                d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
              />
              <defs>
                <linearGradient
                  id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
                  x1="1097.04"
                  x2="-141.165"
                  y1=".22"
                  y2="363.075"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#776FFF" />
                  <stop offset={1} stopColor="#FF4694" />
                </linearGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Why work with us?</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                Javs Construction is a trusted partner of Sky Cable, a leading provider of cable television and internet services in the Philippines. With over 700,000 subscribers across the country, Sky Cable is known for its high-speed internet and wide variety of unlimited data plans, making it the go-to choice for households and businesses in need of reliable connectivity.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                At Javs Construction, we work closely with Sky Cable to bring their services to even more people, ensuring that everyone has access to the digital world. Our experienced professionals are equipped with the latest tools and technologies, and are committed to delivering high-quality, reliable solutions that meet our clients specific needs.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                Our partnership with Sky Cable allows us to offer a range of services to meet your networking and connectivity needs. From network installation and security to internet connectivity and support, we have the expertise and experience to deliver reliable, high-quality solutions that keep you connected and empowered.
                </p>
              </div>
              <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                  {links.map((link) => (
                    <a key={link.name} href={link.href}>
                      {link.name} <span aria-hidden="true">&rarr;</span>
                    </a>
                  ))}
                </div>
                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.name} className="flex flex-col-reverse">
                      <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                      <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        )
      
}

export default WorkWithUs