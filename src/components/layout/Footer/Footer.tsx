const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8">
      <p className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Raghav Sohani. Built with React &
        TypeScript.
      </p>
    </footer>
  );
};

export default Footer;