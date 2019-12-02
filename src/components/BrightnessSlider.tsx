import React from 'react'
import { Slider } from 'antd'

interface IBrightnessSliderProps {
    brightness: number,
    setBrightness: (brightness: number) => void,
}

const BrightnessSlider: React.FC<IBrightnessSliderProps> = ({ brightness, setBrightness }) => {
    // When the user is moving the slider, we overwrite the brightness using this state variable until
    // the user releases the handle. It will be null when the value is not overwritten.
    const [overwritenBrightness, setOverwriteBrightness] = React.useState<number | null>(brightness)

    return (
        <Slider
            step={0.0001}
            tipFormatter={(value) => `${Math.round(value * 100)}%`}
            max={1}
            value={overwritenBrightness || brightness}
            onChange={(value) => typeof value === "number" && setOverwriteBrightness(value)}
            onAfterChange={(value) => {
                // Stop overwriting the brightness
                setOverwriteBrightness(null)

                // Update the brightness
                typeof value === "number" && setBrightness(value)
            }}
        />
    )
}

export default BrightnessSlider
