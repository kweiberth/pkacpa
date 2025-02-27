export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-12 pt-8 lg:container md:px-8">
      {children}
    </div>
  );
}
