const Header = () => {
  return (
    <nav className="py-4 bg-black text-white flex justify-center">
      <div className="w-full px-4 flex justify-between">
        <div>
          <img src="" alt="" />
          <h1 className="mono text-orange-500 text-3xl">Bitcoin Ward</h1>
        </div>
        <div className="space-x-4">
          <a href="">
            <button className="border p-2 px-4 rounded">Contact</button>
          </a>
          <a href="">
            <button className="border p-2 px-4 rounded">Products</button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
