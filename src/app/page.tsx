import IconFooter from "./iconFooter";
import ProjectList from "./projectList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-20">
      <h1 className="text-3xl font-bold mb-0"> Jenson Wintle</h1>
      <h2 className="text-1xl text-balance mt-1">Software Engineering</h2>
      <ProjectList />
      <IconFooter />
    </main>
  );
}
