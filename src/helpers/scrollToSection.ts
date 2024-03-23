/**
 * Scrolls the window to the specified section on the page.
 * @param sectionId - The ID of the section to scroll to.
 */
export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
};
