import { useState } from "react";

export default function useForm(initial = []) {
    // create a state object for our inputs
    const [inputs, setInputs] = useState(initial);

    function handleChange(e) {
        let { value, name, type } = e.target;
        if(type === 'number') {
            value = parseInt(value);
        }
        if(type === 'file'){
            value[0] = e.target.files;
        }
        setInputs({
            // copy the exisisting state
            ...inputs,
           [name]: e.target.value,
        });
    }

    // return the things we want to surface from this custom hook
    return {
        inputs,
        handleChange
    }
}