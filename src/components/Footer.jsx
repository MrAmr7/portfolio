

 const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-blue-800 p-8 rounded-lg flex flex-col gap-1 items-center justify-center">
        <p className="text-5xl text-purple-950 font-bold">Eng-AMR </p>
        <p>&copy; All rights reserved,{currentYear } </p>
    </footer>
  )
}
export default Footer
