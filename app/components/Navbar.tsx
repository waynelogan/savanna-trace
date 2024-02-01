'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const links = [
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Devices', href: '/devices' },
    { name: 'About', href: '/about' },
]


export default function Navbar() {
    const pathName = usePathname()

    return (
        <header className='mb-8 md:mb-4 border-b'>
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:mx-6 lg:max-w-7xl">
                <Link href="/">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Savannah {" "}
                        <span className='text-primary'>
                            Travel
                        </span>
                    </h1>
                </Link>

                <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
                    {
                        links.map((link, idx) => (
                            <div key={idx}>
                                {
                                    pathName === link.href ?
                                        (
                                            <Link href={link.href} className='text-lg font-semibold text-primary'>
                                                {link.name}
                                            </Link>
                                        ) :
                                        (
                                            <Link href={link.href} className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary'>
                                                {link.name}
                                            </Link>
                                        )
                                }
                            </div>
                        ))
                    }
                </nav>
                <div className="flex divide-x border-r sm: border-l">
                    <Button
                        variant={'outline'}
                        className='flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:w-24 md:h-24 rounded-none'
                    >
                        Login
                    </Button>
                </div>
            </div>
        </header>
    )
}