import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'


export default function CustomSelect({ list, props, setValue }) {
  const [selected, setSelected] = useState(list[0])

  useEffect(() => {
    setValue(selected)
  }, [selected])

  return (
    <div {...props}>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default bg-white h-[40px] pl-3 pr-10 text-left rounded-lg shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected}</span>

          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {list.map((iteam, iteamIdx) => (
                <Listbox.Option
                  key={iteamIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-500/50 text-blue-800' : 'text-gray-900'
                    }`
                  }
                  value={iteam}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {iteam}
                      </span>

                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
