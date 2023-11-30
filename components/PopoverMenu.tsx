import Link from 'next/link';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/20/solid';

import Menu from './MenuItems';

export default function PopoverMenu() {
  return (
    <Popover className="relative ring-1 shadow-lg rounded-full h-full bg-white/90 dark:bg-zinc-800/90 dark:text-zinc-200 ring-zinc-900/5 dark:ring-white/10">
      {({ open }) => (
        <>
          <Popover.Button className="h-full outline-none text-sm font-medium flex items-center justify-center pl-5 pr-4 text-zinc-800 dark:text-zinc-300 gap-2">
            Menu
            <ChevronDownIcon className={open ? 'rotate-180 transform w-4' : 'w-4'} />
          </Popover.Button>
          <Popover.Overlay className="z-10 fixed inset-0 bg-zinc-800/20 backdrop-blur-sm" />
          <Transition
            as={Fragment}
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-150 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className="fixed inset-x-4 top-8 rounded-3xl z-50 bg-zinc-100 dark:bg-zinc-900 p-8 ring-1 ring-zinc-900/5 dark:ring-zinc-800/90 flex flex-col">
              <div className="flex justify-between mb-4">
                <h1 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Menu</h1>
                <Popover.Button>
                  <XMarkIcon className="ml-auto w-5 fill-zinc-800 dark:fill-zinc-400 mb-2" />
                </Popover.Button>
              </div>
              <ul className="flex flex-col gap-4 text-zinc-800">
                <Menu />
              </ul>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

