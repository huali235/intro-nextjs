import NewTodoForm from '../components/NewTodoForm'

function DashboardLayout({ children }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <NewTodoForm />
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
