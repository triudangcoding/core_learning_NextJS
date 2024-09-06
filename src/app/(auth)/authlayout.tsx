export default function mainLogin({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <main>
        {children}
     </main>
    );
  }