import React, { useState, useRef, useEffect } from 'react'
import { Select, SelectTrigger, SelectContent, SelectItem } from './ui/select'

const SelectDropdown = ({ value, onChange, options, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false)
    const selectRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const selectedOption = options.find(opt => opt.value === value)

    return (
        <Select ref={selectRef}>
            <SelectTrigger onClick={() => setIsOpen(!isOpen)}>
                <span className={selectedOption ? 'text-gray-900' : 'text-gray-400'}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
            </SelectTrigger>
            {isOpen && (
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem
                            key={option.value}
                            selected={value === option.value}
                            onClick={() => {
                                onChange(option.value)
                                setIsOpen(false)
                            }}
                        >
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            )}
        </Select>
    )
}

export default SelectDropdown
