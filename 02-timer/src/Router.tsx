import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.component'
import { History } from './pages/History/History.component'
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout.component'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
