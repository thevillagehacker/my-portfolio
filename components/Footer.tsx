export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 py-6 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} TheVillageHacker — Built with ❤️ using Next.js & TailwindCSS
      </p>
    </footer>
  );
}
