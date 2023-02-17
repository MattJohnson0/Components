import { BrowserRouter, Routes, Route } from "react-router-dom";
import Directory from "../pages/Directory";
import Listing from "../pages/Listing";
import Profile from "../pages/Profile";
import Edit from "../pages/Edit";
import TestUserPage from "../pages/TestUserPage";
// TODO: Implement a page not found handler
// https://app.clickup.com/t/3jtj229
// import NoPage from "./pages/NoPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Directory />} />
        <Route path="listing/:listingId" element={<Listing />} />
        <Route path="profile/:memberId" element={<Profile />} />
        <Route path="edit" element={<Edit />} />
        <Route path="test" element={<TestUserPage />} />
      </Routes>
    </BrowserRouter>
  );
}
