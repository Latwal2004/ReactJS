import React, { useState } from 'react'

const useToggle = () => {

    const [value, setValue] = useState();
    
    function toggleValue(val) {
        if (typeof val != 'boolean') {
            setValue(!value)
        }
        else {
            setValue(val)
        }
    }
    return [value, toggleValue]
}

export default useToggle