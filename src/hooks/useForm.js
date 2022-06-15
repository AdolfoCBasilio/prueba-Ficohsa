import { useState } from "react"

export const useForm = (inicialState = {}) => {

    const [value, setValue] = useState(inicialState)

    const handleInputChange = ({ target }) => {
        setValue({
            ...value,
            [target.name]: target.value,
        })
    }

    const reset = () => {
        setValue(inicialState);
    }

    return [value, handleInputChange, reset]
}
