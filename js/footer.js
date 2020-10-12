"use strict";

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <footer id="footer">
          <p id="footer-copyright">© 2020 Chris McGraw. All rights reserved.</p>

          <ul id="footer-link-list">
            <li className="footer-link">
              <a href="https://github.com/Chris-McGraw/" aria-label="Chris McGraw GitHub link" target="_blank">
                <i className="fab fa-github-square">
                </i>
              </a>
            </li>

            <li className="footer-link">
              <a href="https://codepen.io/cmcgraw/" aria-label="Chris McGraw Codepen link" target="_blank">
                <i className="fab fa-codepen">
                </i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}
