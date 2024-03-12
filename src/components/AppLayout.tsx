import { ReactNode } from 'react';
import Header from "./Header";
import Footer from "./Footer";

function AppLayout(props: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;