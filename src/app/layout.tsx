import '~/styles/tailwind.css';
import '~/styles/style.scss';

import { ILayoutProps } from '~/interfaces/IRSC';
import { metaObject } from '~/utils/utils';



export const metadata = metaObject({});



export default async function RootLayout({ children }: ILayoutProps) {
  return <html lang="en">
    <body>
      {children}
    </body>
  </html>;
}
