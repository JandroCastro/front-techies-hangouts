import React from "react";

export function NavLateral() {
  return (
    <section className="barra">
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="/">
                <i className="ion-bag"></i> <span>Shop</span>
              </a>
              <ul className="nav-flyout">
                <li>
                  <a href="/">
                    <i className="ion-android-star-outline"></i>Hates
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="ion-heart-broken"></i>Beat
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">
                <i className="ion-ios-settings"></i>{" "}
                <span className="">Controls</span>
              </a>
              <ul className="nav-flyout">
                <li>
                  <a href="/">
                    <i className="ion-ios-cog-outline"></i>Grinder
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">
                <i className="ion-ios-briefcase-outline"></i>{" "}
                <span className="">Folio</span>
              </a>
              <ul className="nav-flyout">
                <li>
                  <a href="/">
                    <i className="ion-ios-navigate-outline"></i>Ghostface
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">
                <i className="ion-ios-analytics-outline"></i>{" "}
                <span className="">Graphicals</span>
              </a>
              <ul className="nav-flyout">
                <li>
                  <a href="/">
                    <i className="ion-ios-timer-outline"></i>Lookie Look
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="ion-ios-game-controller-a-outline"></i>Dork
                    Mfer
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">
                <i className="ion-ios-paper-outline"></i>{" "}
                <span className="">Papers</span>
              </a>
              <ul className="nav-flyout">
                <li>
                  <a href="/">
                    <i className="ion-ios-information-outline"></i>Infos
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="ion-ios-paperplane-outline"></i>Planes
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="ion-android-star-outline"></i>Shop
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">
                <i className="ion-ios-navigate-outline"></i>{" "}
                <span className="">Ass Finder</span>
              </a>
              <ul className="nav-flyout">
                <li>
                  <a href="/">
                    <i className="ion-ios-flame-outline"></i>Burn
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="ion-ios-lightbulb-outline"></i>Bulbs
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="ion-ios-location-outline"></i>Where You
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="ion-ios-locked-outline"></i>On Lock
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="ion-ios-navigate-outline"></i>Ghostface
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">
                <i className="ion-ios-medical-outline"></i>{" "}
                <span className="">Cocaine</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </section>
  );
}
