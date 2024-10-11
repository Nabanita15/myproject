import Header from "./component/Header";
import Section from "./component/Section";
import Footer from "./component/Footer";
function App() {
  return (
    <div>
      {/*- font-awesome-link-icon */}
      {/*- header-section start */}
      <Header />
      {/*- header-section end */}
      {/*...start_section.... */}
      <Section />
      {/*...end_section.... */}
      {/*start_footer*/}
      <Footer />
    </div>
  );
}

export default App;
