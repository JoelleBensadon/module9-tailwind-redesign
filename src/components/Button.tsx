
interface ButtonProps {
  text: string;
  onClick?: () => void;
}

function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer"
    >
      {text}
    </button>
  );
}

export default Button;
