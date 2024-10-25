export default function PageHeader({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) {
  return (
    <>
      <h1 className="mb-1 text-3xl font-bold">{heading}</h1>
      <p className="mb-8 text-pretty">{subheading}</p>
    </>
  );
}
