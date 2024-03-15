import PaginationControls from "./components/PaginationControls";

const data = [
  "entry 1",
  "entry 2",
  "entry 3",
  "entry 4",
  "entry 5",
  "entry 6",
  "entry 7",
  "entry 8",
  "entry 9",
  "entry 10",
  "entry 11",
  "entry 12",
  "entry 13",
  "entry 14",
  "entry 15",
  "entry 16",
  "entry 17",
  "entry 18",
  "entry 19",
  "entry 20",
];

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = parseInt(searchParams["page"] ?? "1");
  const per_page = parseInt(searchParams["per_page"] ?? "5");

  const start = (page - 1) * per_page;
  const end = Math.min(start + per_page, data.length);

  const entries = data.slice(start, end);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
        {entries.map((entry, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <p>{entry}</p>
          </div>
        ))}
      </div>

      <PaginationControls
        hasNextPage={end < data.length}
        hasPrevPage={start > 0}
      />
    </div>
  );
}
