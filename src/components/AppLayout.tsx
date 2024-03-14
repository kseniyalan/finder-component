import { ReactNode } from 'react';
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode
};

function AppLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;