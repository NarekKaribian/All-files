export function createHeaderTitleElement(title) {
  const headerTitleElement = document.createElement("div");
  headerTitleElement.classList.add("header_title");
  headerTitleElement.append(title);
  return headerTitleElement;
}
