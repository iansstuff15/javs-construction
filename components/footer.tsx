import Image from "next/image"
import { MutableRefObject } from "react"

const Footer = ({}) => {

    return(
        
<footer className="bg-white dark:bg-gray-900">

    <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
    <Image className="h-8" src="/logo.png" alt="" width={120} height={130}/>
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">JAVS Construction™</a>. All Rights Reserved.
        </span>
      
    </div>
</footer>

    )
}

export default Footer