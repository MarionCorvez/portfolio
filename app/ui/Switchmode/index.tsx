import { useEffect } from "react";

function Switchmode() {
  // Detect if dark mode is on
  useEffect(() => {
    const useDark = window.matchMedia("(prefers-color-scheme: dark)");
    // Toggle the "theme--dark" class based on if the media query matches
    function toggleDarkMode(state: boolean | undefined) {
      document.documentElement.classList.toggle("theme--dark", state);
    }
    // Initial setting
    toggleDarkMode(useDark.matches);

    // Listen for changes in the OS settings
    useDark.addEventListener("change", (event) => {
      toggleDarkMode(event.matches);
    });
  }, []);

  // Toggle the "theme--dark" class on click
  function handleMode(): void {
    document.documentElement.classList.toggle("theme--dark");
  }

  return (
    <>
      <button
        onClick={handleMode}
        className="moon"
        title="Click to change light mode"
      ></button>
    </>
  );
}

export default Switchmode;
