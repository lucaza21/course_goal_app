import type { ReactNode } from "react";

interface Image {
    src: string;
    alt: string;
    }

type HeaderProps = {
    image: Image; 
    children: ReactNode
}

function Header({ image, children } : HeaderProps ) {
  return (
    <header>
        <div>
            <img alt={image.alt} src={image.src} />
        </div>
        <div>{children}</div>
    </header>
  )
}

export default Header