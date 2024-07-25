const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return ( 
        <div className="bg-lime-800 h-full">
            {children}
        </div>
     );
}
 
export default AuthLayout;