import React from "react";

export function NavMenu() {
  return (
    <nav className="navMenu">
      <ul>
        <li>
          <label>
            To Dashboard
            <a href="home">
              <img src="https://image.flaticon.com/icons/svg/846/846551.svg" />
            </a>
          </label>
        </li>
        <li>
          <label>
            Your Hangouts
            <a href="/myhangouts">
              <img src="https://image.flaticon.com/icons/svg/566/566245.svg" />
            </a>
          </label>
        </li>
        <li>
          <label>
            Notifications
            <a href="/notifications">
              <img src="https://image.flaticon.com/icons/svg/1380/1380338.svg" />
            </a>
          </label>
        </li>
        <li>
          <label>
            Options
            <a href="/options">
              <img src="https://image.flaticon.com/icons/svg/2099/2099174.svg" />
            </a>
          </label>
        </li>
      </ul>
    </nav>
  );
}
