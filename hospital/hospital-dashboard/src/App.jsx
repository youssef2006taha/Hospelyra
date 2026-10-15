import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout.jsx'
import PageView from './components/ui/PageView.jsx'
import { pages } from './pages/pageConfig.js'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to={`/${pages[0].path}`} replace />} />
        {pages.map(({ path, title }) => (
          <Route key={path} path={path} element={<PageView title={title} />} />
        ))}
        <Route path="*" element={<Navigate to={`/${pages[0].path}`} replace />} />
      </Route>
    </Routes>
  )
}

export default App
