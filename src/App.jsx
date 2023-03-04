import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import AppLayout from 'components/Layout';

const Home = lazy(() => import('pages/Home/Home.jsx'));
const Skills = lazy(() => import('pages/Skills/Skills.jsx'));
const Education = lazy(() => import('pages/Education/Education.jsx'));
const Contacts = lazy(() => import('pages/Contacts/Contacts.jsx'));
const WorkExperience = lazy(() =>
  import('pages/WorkExperience/WorkExperience')
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="education" element={<Education />} />
          <Route path="work-experience" element={<WorkExperience />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
