// Define standard device viewports
const viewports = [
  { device: "Desktop - Small", width: 1280, height: 800 },
  { device: "Desktop - Standard", width: 1366, height: 768 },
  { device: "Desktop - Large", width: 1920, height: 1080 },
  { device: "iPad - Large", width: 1024, height: 1366 },
  { device: "Mobile - Small", width: 360, height: 640 },
  { device: "Mobile - Medium", width: 375, height: 812 },
  { device: "Mobile - Large", width: 428, height: 926 },
];

describe("Lighthouse Accessibility and Performance Test", () => {
  // Visit the target website
  it("should run a Lighthouse audit on the homepage", () => {
    cy.visit("https://automationexercise.com");

    cy.document().then((doc) => {
      const link = doc.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css?family=Roboto:400,300,400italic,500,700,100";
      doc.head.appendChild(link);
    });

    // Run a Lighthouse audit and save results
    cy.lighthouse({
      performance: 20,
      accessibility: 84,
      "best-practices": 67,
      seo: 85,
    });
  });
});