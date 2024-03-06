import "./App.css";

const Header = () => {
  return (
    <header>
      <h1>Welcome to our blog</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const BlogDetails = ({ data }) => {
  return (
    <div>
      <h2>{data.title}</h2>
      <p>Author: {data.author}</p>
      <p>Date: {data.date}</p>
      <p>{data.content}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Our Blog. All rights reserved.</p>
    </footer>
  );
};

export default function App() {
  const blogData = {
    title: "Importance of Learning React",
    author: "Jane Doe",
    date: "March 1, 2024",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  return (
    <>
      <Header />
      <main>
        <BlogDetails data={blogData} />
      </main>
      <Footer />
    </>
  );
}
