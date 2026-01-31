import * as React from "react"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const Select = React.forwardRef(({ className, children, ...props }, ref) => {
    return (
        <div className={cn("relative", className)} ref={ref} {...props}>
            {children}
        </div>
    )
})
Select.displayName = "Select"

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                "flex h-11 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm",
                "ring-offset-background placeholder:text-muted-foreground",
                "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                "disabled:cursor-not-allowed disabled:opacity-50",
                "hover:bg-secondary/50 transition-colors",
                className
            )}
            {...props}
        >
            {children}
            <ChevronDown className="h-4 w-4 opacity-50" />
        </button>
    )
})
SelectTrigger.displayName = "SelectTrigger"

const SelectContent = React.forwardRef(({ className, children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "absolute z-50 mt-1 w-full overflow-hidden rounded-md border bg-white shadow-lg",
                "animate-in fade-in-0 zoom-in-95",
                className
            )}
            {...props}
        >
            <div className="max-h-60 overflow-auto p-1">
                {children}
            </div>
        </div>
    )
})
SelectContent.displayName = "SelectContent"

const SelectItem = React.forwardRef(({ className, children, selected, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm outline-none",
                "hover:bg-secondary focus:bg-secondary transition-colors",
                selected && "bg-secondary",
                className
            )}
            {...props}
        >
            {selected && (
                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                    <Check className="h-4 w-4" />
                </span>
            )}
            {children}
        </div>
    )
})
SelectItem.displayName = "SelectItem"

export { Select, SelectTrigger, SelectContent, SelectItem }
