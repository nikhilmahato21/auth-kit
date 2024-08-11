const AuthLayout = ({children}:{children:React.ReactNode})=>{
    return <div className="h-full flex items-center justify-center bg-gradient-to-tr from-sky-200 to-indigo-500" >
        {children}
    </div>
}

export default AuthLayout