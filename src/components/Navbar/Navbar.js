import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const navigation = [
        { name: 'O nas', href: '#', current: true },
        { name: 'Menu', href: '#', current: false },
        { name: 'Rezerwacje', href: '#', current: false },
        { name: 'Kontakt', href: '#', current: false },
        { name: 'Zamów online', href: '#', current: false },
      ]

    return (
    <Disclosure as="nav" className="bg-white/70">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-12 items-center justify-between">

            {/* Logo */}
            <div className="flex items-center pl-4 sm:pl-6 lg:pl-6">
                <h1 className='italic text-italian-green text-2xl text-left '>
                    Siesta 
               </h1>
            </div>

            {/* Navigation */}
            <div className="hidden sm:flex flex-grow justify-center">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-italian-green/50 text-white' : 'text-italian-green hover:bg-italian-green/20 hover:text-italian-green',
                      'rounded-lg px-3 py-1 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

         {/* Mobile menu button*/}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative align-right inline-flex items-center justify-center rounded-md pt-1 text-italian-green hover:bg-italian-green/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute" />
              <span className="sr-only">Open main menu</span>
              <i  aria-hidden="true" className="fa-solid fa-bars block size-6 group-data-[open]:hidden"></i>
              <i  aria-hidden="true" className="fa-solid fa-xmark hidden size-6 group-data-[open]:block"></i>
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="flex flex-col space-y-2 px-3 pb-2 pt-1">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-italian-green/50 text-white' 
                : 'text-italian-green hover:bg-italian-green/20 over:text-white',
                'block rounded-md py-1 px-3 text-sm font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    );
}
