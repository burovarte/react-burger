import {useState} from "react";

export function useForm(inputValues: any) {
    const [form, setValue] = useState(inputValues);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;
        setValue({...form, [name]: value});
    };
    return {form, onChange, setValue};
}