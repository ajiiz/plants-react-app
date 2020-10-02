import { useState } from 'react'

const useForm = () => {

    const [values, setValues] = useState({
        color: 'white',
        searchValue: '',
        isColorChecked: false
    })

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target
        if(type === "checkbox") {
            setValues({
                ...values,
                [name]: checked
            })
        } else {
            setValues({
                ...values,
                [name]: value
            })
        }
    }

    return {
        values,
        handleChange
    }
}

export default useForm