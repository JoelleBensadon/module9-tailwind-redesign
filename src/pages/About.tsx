
import Card from "../components/Card";

function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <h1 className="text-3xl font-bold mb-4">About This Project</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          This Student Directory application was created using React,
          TypeScript, React Router, and Tailwind CSS.
        </p>
        <p className="text-slate-600 dark:text-slate-300">
          The application displays user information from the
          JSONPlaceholder API. It includes responsive layouts,
          reusable components, and a light and dark mode toggle.
        </p>
      </Card>
    </div>
  );
}

export default About;
