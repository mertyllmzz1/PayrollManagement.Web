export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: 24 }}>
      <h1>Payroll Management</h1>
      <hr />
      <div>{children}</div>
    </div>
  );
}