/**
 * @fileoverview Handles all interactions on the navigation drawer.
 */


/**
* JS selectors
* @enum {string}
*/
const SELECTORS = {
  PORTFOLIO_LINKS: '.js-portfolio-link',
  BG_IMAGES: '.js-bg-image',
}
  
  /**
  * JS classes
  * @enum {string}
  */
  const CLASSES = {
    PORTFOLIO_ANIMATION: '-animate-portfolio',
  }
  
  /**
  * Controller for site (main).
  */
  class Main {
    constructor() {
      this.portfolioLinks = [...document.querySelectorAll(SELECTORS.PORTFOLIO_LINKS)];
      this.backgroundImages = [...document.querySelectorAll(SELECTORS.BG_IMAGES)];

      this.displayPortfolioImage = this.displayPortfolioImage.bind(this);
      this.hidePortfolioImage = this.hidePortfolioImage.bind(this);

      this.init();
    }
  
    init() {
      this.portfolioLinks.forEach((link) => {
        link.addEventListener('mouseover', () => {
          this.displayPortfolioImage(link);
        });
        link.addEventListener('mouseout', () => {
          this.hidePortfolioImage(link);
        })
      });
    }

    displayPortfolioImage(i) {
      this.backgroundImages.forEach(image => {
        if (image.dataset.title === i.dataset.linkTitle) {
          image.classList.add(CLASSES.PORTFOLIO_ANIMATION);
          image.setAttribute("style", "background-image: url(" + image.dataset.background + ");")
        }
      })
    }

    hidePortfolioImage(i) {
      this.backgroundImages.forEach(image => {
        image.classList.remove(CLASSES.PORTFOLIO_ANIMATION);
      })
    }
  }
  
  new Main();