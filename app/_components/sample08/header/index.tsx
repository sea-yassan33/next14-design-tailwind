import Link from 'next/link'
import { SiInstagram } from 'react-icons/si'


export default function S08_Header(){

  return(
    <header className="w-full px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-xl font-light"> Design Atelier</h1>
          <p className="text-sm text-muted-foreground">Interior Design / Decoration</p>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-muted-foreground transition-colors">
            HOME
          </Link>
          <Link href="#" className="hover:text-muted-foreground transition-colors">
            WORKS
          </Link>
          <Link href="#" className="hover:text-muted-foreground transition-colors">
            ABOUT
          </Link>
          <Link href="#" className="hover:text-muted-foreground transition-colors">
            CONTACT
          </Link>
          <Link href="#" className="hover:text-muted-foreground transition-colors">
            BLOG
          </Link>
          <Link href="https://instagram.com" className="hover:text-muted-foreground transition-colors">
            <SiInstagram className="w-5 h-5" />
          </Link>
        </nav>
      </div>
    </header>
  )
}