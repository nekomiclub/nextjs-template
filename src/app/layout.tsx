import '~/styles/index.scss';
import '~/styles/globals.css';

import { metaObject } from "~/config"
import { ILayoutProps } from "~/interfaces/IRSC"

export const metadata = metaObject({});

export default function RootLayout({
  children,
}: ILayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
