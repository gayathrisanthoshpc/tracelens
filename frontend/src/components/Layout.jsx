import Sidebar from "./Sidebar";

function Layout({ children }) {

  return (

    <div className="flex min-h-screen bg-[#050816] text-white">

      {/* Fixed Sidebar */}
      <aside className="
        w-64
        h-screen
        flex-shrink-0
      ">
        <Sidebar />
      </aside>


      {/* Scrollable Content */}
      <main className="
        flex-1
        h-screen
        overflow-y-auto
      ">
        {children}
      </main>


    </div>

  );

}

export default Layout;