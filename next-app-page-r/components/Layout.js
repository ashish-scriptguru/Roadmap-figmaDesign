export default function Layout({children}){
    return(
        <>
            <header className="p-6 bg-gray-600 text-white text-center">Header</header>
            <main className="p-6 text-center">{children}</main>
            <footer className="p-6 bg-gray-600 text-white text-center mt-100">Footer</footer>
        </>
    );
}