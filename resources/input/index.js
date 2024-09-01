const Input = ({type="text", label="Ingrese los datos",className="",name="text",id="text",placeholder="digite un texto",required=false,onChange=()=>{},value=""})=>{

    return (
        <div>
            <label
                htmlFor={name}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {label}
              </label>
            <input
                type={type}
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
                name={name}
                id={id}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                value={value}
              />
        </div>
        
    )
}

export default Input;