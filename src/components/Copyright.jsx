export default function Copyright() {
  return (
    <footer className="back-color">
      <div
        className="
          mx-auto max-w-4xl
          px-4 py-6
          flex flex-col items-center gap-2
          text-sm text-gray-950
        "
      >
        <a
          href="mailto:ajay.kumar.candidate@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 transition-colors"
        >
          ajay.kumar.candidate@gmail.com
        </a>

        <hr className="gradient-fade-inverse w-full" />

        <p className="text-center">© 2026 Designed &amp; Built by Ajay Kumar</p>
      </div>
    </footer>
  );
}
