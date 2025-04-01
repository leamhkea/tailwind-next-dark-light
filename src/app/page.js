import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  const data = [
    {
      title: "Best of the day",
      category: "Shots featured",
    },
    {
      title: "Featured streams",
      category: "Watch livestreams",
    },
    {
      title: "Subscriptions",
      category: "Premium content",
    },
    {
      title: "Creative feed",
      category: "Premium feed",
    },
  ];
  return (
    <main>
      <ThemeToggle />
      <ul className="grid bg-white p-4 rounded-2xl shadow-2xl  dark:bg-gray-800">
        {data.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </ul>
    </main>
  );
}

function Card({ title, category }) {
  return (
    <li className=".max-w-[400px] w-[400] p-4 rounded-xl group hover:bg-slate-100 dark:hover:bg-gray-600">
      <a href="#0" className="flex gap-4 items-center">
        <div className="aspect-square w-10 rounded-md bg-[#cbd5e1]"></div>
        <div className="dark:text-white">
          <p className="font-semibold">{title}</p>
          <small>{category}</small>
        </div>
        <svg
          className="hidden text-purple-600 dark:text-purple-400 group-hover:block ml-auto "
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8l-8-8z"
          ></path>
        </svg>
      </a>
    </li>
  );
}
