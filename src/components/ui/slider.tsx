"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "min" | "max" | "step"> {
    value: number[]
    max: number
    min?: number
    step?: number
    onValueChange?: (vals: number[]) => void
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
    ({ className, value, max, min = 0, step = 1, onValueChange, ...props }, ref) => {
        const val = value[0] || min;

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = parseFloat(e.target.value);
            if (onValueChange) {
                onValueChange([newValue]);
            }
        };

        return (
            <div className={cn("relative flex w-full touch-none select-none items-center", className)}>
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={val}
                    onChange={handleChange}
                    ref={ref}
                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                    {...props}
                />
            </div>
        )
    }
)
Slider.displayName = "Slider"

export { Slider }
