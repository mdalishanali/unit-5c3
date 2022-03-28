import { Routes, Route } from "react-router";
import { Home } from "../Components/Home/Home";
import { Section } from "../Components/Section/Section";
import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/bookdetailspage/:ID" element={<BookDetailsPage />} />
        <Route
          path="/section/:section/bookdetailspage/:ID"
          element={<BookDetailsPage />}
        />

        <Route path="/section/:section" element={<Section />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
