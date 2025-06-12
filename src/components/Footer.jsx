const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-auto">
      <div className="text-center">
        &copy; {new Date().getFullYear()} RestoBite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
