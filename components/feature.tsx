import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, LinkIcon, LifebuoyIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { MutableRefObject } from 'react'
interface props {
  reference:MutableRefObject<null>
}
const Feature:React.FC<props> = ({reference}) => {
const features = [
    {
      name: 'Network Installation',
      description:
        'We offer complete installation services for all types of networks, from simple home setups to complex enterprise solutions. We work closely with our',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Network Security',
      description: 'We understand the importance of network security in today\'s digital landscape. We offer comprehensive security solutions that protect your network from threats, ensuring that your data is safe and secure.',
      icon: LockClosedIcon,
    },
    {
      name: 'Network Upgrades',
      description: 'As technology evolves, so must your network. We offer upgrade services to ensure that your network is always up-to-date and performing at its best.',
      icon: ServerIcon,
    },
    {
      name: 'Internet Connectivity',
      description: ' We offer a range of internet connectivity solutions, from basic home connections to high-speed, fiber-optic solutions for businesses and communities.',
      icon: LinkIcon,
    },
    {
      name: 'Network Support',
      description: 'We provide ongoing network support and maintenance services, ensuring that your network is always up and running smoothly.',
      icon: LifebuoyIcon,
    },
  ]
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" ref={reference}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Our Commitment</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">To our work</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Our commitment to quality and customer satisfaction sets us apart from our competition, and we take great pride in delivering projects that exceed our clients expectations. We believe that by working together, we can empower communities and create a more connected and accessible world.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              At Javs Construction, we offer a range of services to meet your networking and connectivity needs. Our experienced professionals are equipped with the latest tools and technologies, and are committed to delivering high-quality, reliable solutions that exceed your expectations.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/feature.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            objectFit='cover'
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
export default Feature