import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

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
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-12 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-italian-green hover:bg-italian-green/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <i  aria-hidden="true" className="fa-solid fa-bars block size-6 group-data-[open]:hidden"></i>
              <i  aria-hidden="true" className="fa-solid fa-xmark hidden size-6 group-data-[open]:block"></i>
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
                {/* tutaj można wrzucić jakieś logo pizzy */}
                <h1 className='italic text-italian-green text-2xl'>Siesta <i class="fa-solid fa-pizza-slice h-17 w-auto" alt="Siesta Restaurant"></i>
                </h1>
            </div>
            <div className="hidden sm:ml-6 sm:block">
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
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-italian-green/50 text-white' : 'text-italian-green hover:bg-italian-green/20 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
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
