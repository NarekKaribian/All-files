export function headerLogo(createLogo, callback) {
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo_container");

  const logoNameEnglishElement = document.createElement("span");
  logoNameEnglishElement.append(createLogo.title.logoNameEnglish);

  const logoNameTranslateElement = document.createElement("span");
  logoNameTranslateElement.append(createLogo.title.logoNameTranslate);

  logoContainer.append(logoNameEnglishElement, logoNameTranslateElement);

  callback(logoContainer);
}
