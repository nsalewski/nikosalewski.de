export default function Layout({ children }) {
    return (
      <div>
        <header>
          {/* Navigation goes here */}
        </header>
        <main>{children}</main>
        <footer>
          {/* Footer goes here */}
        </footer>
      </div>
    )
  }
  